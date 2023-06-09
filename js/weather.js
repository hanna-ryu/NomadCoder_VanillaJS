function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "1bef3c9ca46b83d59cdb00830dad11f8";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city =  document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:nth-of-type(2)");
            const icon = document.querySelector(".weatherImg");
            const iconImg = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            city.innerText  = `Weather / ${data.name} : `;
            weather.innerText = ` ${data.weather[0].main}` ;
            icon.setAttribute('src', iconImg)
        });

};

function onGeoError(){
    alert("Can't find you :(")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)