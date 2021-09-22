var cityName1 = "Burbank"
function burbankChange(){
    document.querySelector("#city").innerText = cityName1
}

var cityName2 = "Chicago"
function chicagoChange(){
    document.querySelector("#city").innerText = cityName2
}

var cityName3 = "Dallas"
function dallasChange(){
    document.querySelector("#city").innerText = cityName3
}

function showAlert(){
    alert("Loading weather report...")
}

var newRed1 = "75°"
var newBlue1 = "65°"
var newRed2 = "80°"
var newBlue2 = "66°"
var newRed3 = "69°"
var newBlue3 = "61°"
var newRed4 = "78°"
var newBlue4 = "70°"

function fahr(){
    
    document.querySelector("#red1").innerText = newRed1
    document.querySelector("#blue1").innerText = newBlue1
    document.querySelector("#red2").innerText = newRed2
    document.querySelector("#blue2").innerText = newBlue2
    document.querySelector("#red3").innerText = newRed3
    document.querySelector("#blue3").innerText = newBlue3
    document.querySelector("#red4").innerText = newRed4
    document.querySelector("#blue4").innerText = newBlue4
}



function removeCookie(){
    var el = document.getElementById('cookie');
    el.remove()
}