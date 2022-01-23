const url = "https://api.wheretheiss.at/v1/satellites/25544";
async function getISS() {
    const response = await fetch(url);
    const data = await response.json();
    const { latitude, longitude, velocity } = data;
    const mph = velocity / 1.609344;
    

    document.querySelector('#latitude').innerText = latitude;
    document.querySelector('#longitude').innerText = longitude;
    document.querySelector('#velocity').innerText = `${mph.toFixed(2)} mph`;
} 

getISS();
setInterval(getISS, 2000);
