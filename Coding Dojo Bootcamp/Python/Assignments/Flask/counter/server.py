from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' # set a secret key for security purposes

@app.route('/')
def page():
    if "count" not in session:
        session['count'] = 1
    else:    
        session['count'] += 1
    
    return render_template("index.html") 

@app.route('/add')
def add():
    session['count'] += 1
    print(session['count'])
    return redirect("/")

@app.route('/destroy_session')
def reset():
    session.clear()
    return redirect("/")

if __name__=="__main__":
    app.run(debug=True)