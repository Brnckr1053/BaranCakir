from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def rend_int():
    return "Play PlayGround"

@app.route("/play")
def rend_blocks():
    return render_template('index.html', rpt = 3)

@app.route("/play/<boxnum>")
def box_num(boxnum):
    return render_template('index.html', rpt = int(boxnum))

@app.route("/play/<boxnum>/<color>")
def change_color(boxnum, color):
    return render_template('index.html', rpt = int(boxnum), bckclr = color)

if __name__ == "__main__":
    app.run(debug = True)