function convertToFahrenheit() {
    var f = document.getElementById('fah');
    var c = document.getElementById('cel');
    var temp = c.value;
    var value = parseFloat(temp);
    if (temp == "") {
        alert("Enter Value In Celcuis!");
    } else if (value) {
        var converted = (value * 9 / 5) + 32;
        f.value = converted.toFixed(2);;
    } else {
        alert("Probably wrong input!");
    }
}

function convertToCelcius() {
    var f = document.getElementById('fah');
    var c = document.getElementById('cel');
    var temp = f.value;
    var value = parseFloat(temp);
    if (temp == "") {
        alert("Enter Value In Fahrenheit!");
    } else if (value) {
        var converted = (value - 32) * 5 / 9;
        c.value = converted.toFixed(2);
    } else {
        alert("Probably wrong input!");
    }
}