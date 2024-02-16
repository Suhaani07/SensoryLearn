from flask import Flask, request, send_file
from google.cloud import texttospeech
import os
import google.generativeai as genai
from flask_cors import CORS

SECRET_KEY = os.environ.get('KEY')
os.environ['GOOGLE_API_KEY'] = SECRET_KEY
genai.configure(api_key=os.environ['GOOGLE_API_KEY'])

model = genai.GenerativeModel('gemini-pro')

# Instantiates a client for the Google Text-to-Speech API
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'google_secret_key.json.json'
tts_client = texttospeech.TextToSpeechClient()

app = Flask(__name__)
CORS(app) 

def generate_audio_from_text(text):
    audio_file_path = 'temp_audio.mp3'
    if os.path.exists(audio_file_path):
        os.remove(audio_file_path)
        print(f"Deleted existing audio file at: {audio_file_path}")

    synthesis_input = texttospeech.SynthesisInput(text=text)
    voice = texttospeech.VoiceSelectionParams(language_code="en-US", ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL)
    audio_config = texttospeech.AudioConfig(audio_encoding=texttospeech.AudioEncoding.MP3)
    tts_response = tts_client.synthesize_speech(input=synthesis_input, voice=voice, audio_config=audio_config)

    # Save the generated audio file temporarily
    
    
    with open(audio_file_path, "wb") as out:
        out.write(tts_response.audio_content)
        print(f"Audio file saved at: {audio_file_path}")

    return os.path.abspath(audio_file_path)

@app.route('/api/answer/', methods=['POST'])
def gemini_response():
    try :
        age = request.json['age']
        language = request.json['language']
        subject = request.json['subject']
        number= request.json['number']
        response = model.generate_content("Give information about continents topic in" + subject +" in " + language + " for " + age + " years old kids",
                                        generation_config=genai.types.GenerationConfig(
                                            candidate_count=1,
                                            max_output_tokens=800,
                                            top_p=0.6,
                                            top_k=5,
                                            temperature=0.8))
        print(number)
        # Perform the text-to-speech on the generated text
        audio_file_path = generate_audio_from_text(response.text)

        # Return the path to the generated audio file along with the text
        return {'answer': response.text, 'audio_file_path': audio_file_path}
    except KeyError as e:
        print(f"KeyError: {str(e)}")
        print(f"Request JSON Data: {request.json}")
        return {'error': 'Invalid request data'}, 400


@app.route('/api/get-audio/')
def get_audio():
    # Serve the temporary audio file directly
    audio_file_path = 'temp_audio.mp3'
    return send_file(audio_file_path, mimetype='audio/mp3')

if __name__ == '__main__':
    app.run(debug=True)
