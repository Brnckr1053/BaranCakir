from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def first():
    return render_template('index.html', bigbox = 8, smallbox = 8)

@app.route("/<number>")
def second(number):
    return render_template('index.html', bigbox = 8, smallbox = int(number))

@app.route("/<numberrow>/<numbercolumn>")
def third(numberrow, numbercolumn):
    return render_template('index.html', bigbox = int(numberrow), smallbox = int(numbercolumn))

@app.route("/<numberrow>/<numbercolumn>/<square0>/<square1>")
def set_color(numberrow, numbercolumn, square0, square1):
    return render_template('index.html', bigbox = int(numberrow), smallbox = int(numbercolumn), square0 = square0, square1 = square1)




if __name__ == "__main__":
    app.run(debug = True)