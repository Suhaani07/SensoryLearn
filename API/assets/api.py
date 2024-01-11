from flask import Flask
import os
import google.generativeai as genai

SECRET_KEY=os.environ.get('KEY')
os.environ['GOOGLE_API_KEY'] = SECRET_KEY
genai.configure(api_key = os.environ['GOOGLE_API_KEY'])

model = genai.GenerativeModel('gemini-pro')

app = Flask(__name__)


@app.route('/api/answer/')
def geminiresponse():
    letter = model.generate_content("Give english aphabet letter 'a' as capital") 
    sound = model.generate_content("Give english aphabet letter 'a' pronunvcation") 
    explanation = model.generate_content("Give english aphabet letter 'a' explanation as if teaching to a child")
    example = model.generate_content("Give english aphabet letter 'a' example")
    letterimage = model.generate_content("Give english aphabet letter 'a' image")
    exampleimage = model.generate_content("Give english aphabet letter 'a' example image")
    return{'answer':
           {
               'letter':letter.text,
                'sound':sound.text,
                'explanation':explanation.text,
                'example':example.text,
                'letterimage':letterimage.text,
                'exampleimage':exampleimage.text
           }
    }

