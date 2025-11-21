let windspeed = 7.2;
let temperature = 70.8;
const windchill_function = function(v, t) {
    if (temperature <= 50 && windspeed > 3) {
        let chill = 35.74 + (0.6215 * t) - (35.75 * v ** 0.16) + (0.4275 * t * v ** 0.16);
        return `${chill.toFixed(2)} °F`;
    }
    else {
        return "N/A";
    }
}
let windchill = windchill_function(windspeed, temperature);

const windchill_output = document.querySelector("#windchill")
windchill_output.innerHTML = `${windchill}`






const today = new Date()
const currentyear = document.querySelector("#currentyear")
currentyear.innerHTML = `${today.getFullYear()}`

document.getElementById("lastModified").innerHTML = document.lastModified;