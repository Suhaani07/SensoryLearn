from flask import Flask
import os
import google.generativeai as genai
import sign_language_translator as slt

SECRET_KEY=os.environ.get('KEY')
os.environ['GOOGLE_API_KEY'] = SECRET_KEY
genai.configure(api_key = os.environ['GOOGLE_API_KEY'])

model = genai.GenerativeModel('gemini-pro')

app = Flask(__name__)

@app.route('/api/answer/')

def geminiresponse():
    response = model.generate_content("Give song to learn about 7 continents of the world in form of song, easy for small kids",
                                 generation_config = genai.types.GenerationConfig(
                                  candidate_count = 1,
                                  max_output_tokens = 800,
                                  top_p = 0.6,
                                  top_k = 5,
                                  temperature = 0.8) )
    print(response.text)
    return {'answer': response.text}
    

