from flask import Flask, render_template, request, redirect
from user import User

app = Flask (__name__)

@app.route("/")
def read():
    return render_template("read.html")

@app.route("/insertuser", methods=["POST"])
def insert_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]

    }
    User.insert_user(data)
    return redirect("/create")

@app.route("/create", methods=["GET","POST"])
def create():
    users = User.get_all_users()
    return render_template("create.html", users = users)    

if __name__=="__main__":
    app.run(debug=True)