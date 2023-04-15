const API_KEY="8013c4f6767d48a971609f4444e328f0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_box = document.querySelector(".input");
const search_btn = document.querySelector(".btn");

const icon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${API_KEY}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            icon.src = "./images/clouds.png";
        }else if(data.weather[0].main == "Rain"){
            icon.src = "./images/rain.png";
        }else if(data.weather[0].main == "Mist"){
            icon.src = "./images/mist.png";
        }else if(data.weather[0].main == "Drizzle"){
            icon.src = "./images/drizzle.png";
        }else if(data.weather[0].main == "Snow"){
            icon.src = "./images/snow.png";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

search_btn.addEventListener("click", () => {
    checkWeather(search_box.value);
});