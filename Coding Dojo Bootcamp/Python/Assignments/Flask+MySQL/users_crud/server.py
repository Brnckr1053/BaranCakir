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

@app.route("/show/<int:id>", methods=["GET", "POST"])
def show(id):
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "id":id
    }
    user = User.show_user(data)
    return render_template("show.html", user = user)

@app.route("/edit/<int:id>")
def update_user(id):
    data = {
        "id":id
    }
    user = User.get_user(data)
    return render_template("edituser.html", user = user)

@app.route("/edituser/<int:id>", methods=["POST"])
def update_user_db(id):
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "id":id

    }
    User.update_user(data)
    return redirect("/create")

@app.route("/delete<int:id>")
def delete(id):
    data = {
        "id":id
    }
    User.delete_user(data)
    return redirect("/create")

if __name__=="__main__":
    app.run(debug=True)