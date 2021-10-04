from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = "keep it secret, keep it safe"

@app.route('/')
def page():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def result():

    # if len(request.form["name"])<1:
    #     flash("Name field can not be empty")
    #     return redirect("/")
    # if len(request.form["comment"])>120:
    #     flash("comment have to be less than 120 characters")
    #     return redirect("/")
    # else:
    #     name = request.form["name"]
    #     location = request.form["location"]
    #     language = request.form["language"]
    #     comment = request.form["comment"]
    #     return render_template("result.html", name = name, location = location, language = language, comment = comment)

    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']

    if len(session['name']) < 1:
        flash("Name cannot be empty!")
    else:
        pass
    

    if len(request.form['comment']) > 120:
        flash("Comment have to be less than 120 characters.")
        
    if '_flashes' in session.keys():
        return redirect('/')
    else:    
        return render_template("result.html", name = session['name'], location = session['location'], language = session['language'], comment = session['comment'])


if __name__=="__main__":
    app.run(debug=True)