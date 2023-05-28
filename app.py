from flask import Flask
from flask import render_template
from flask import send_from_directory
from flask import request
from flask import redirect
import os

app = Flask(__name__)

ICONS = os.path.join('static/img/icons')
app.config['ICONS']=ICONS

LANG = os.path.join('static/js')
app.config['LANG']=LANG

@app.route('/static/js/<name>')
def lang(name):
    return send_from_directory(app.config['LANG'],name)

@app.route('/')
def index():
    return render_template("/index.html")




#pip install yagmail[all]
import yagmail

@app.route('/send', methods=['POST'])
def send():


    email = 'pruebadecorreojl720@gmail.com'
    #kqgbtrjxjhftixbj
    passw = 'kqgbtrjxjhftixbj'

    yag = yagmail.SMTP(user=email, password=passw)


    _name=request.form['name']
    _read=request.form['read']
    _message=request.form['message']

    dest = ['javlizca720@gmail.com']
    name = _name
    read = '<h1>' + _read + '</h1>'
    message = _message

    yag.send(dest, name,[read, message])

    return redirect('/')

if __name__=='__main__':
        app.run(debug=True)