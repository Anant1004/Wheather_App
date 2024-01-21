const apiKey = "2a30f4ca5cf5e59e6041df3c442f9d16";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const result =  await fetch(apiUrl + city +`&appid=${apiKey}`);  
    if (result.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        document.querySelector(".error").style.display = "none";

        var data = await result.json();
        console.log(data)
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "Km/hr";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/assets/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "assets/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "assets/rain.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "assets/mist.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "assets/drizzle.png";
        }
        document.querySelector(".weather").style.display = "block";
    }
}
searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value); // banglore ka awhether

});

