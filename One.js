const CityName = document.getElementById("CityName");
const CityTEmp = document.getElementById("CityTemp");
const PredictionText = document.getElementById("PredictionID");
const WindSpeed = document.getElementById("WindID");
const SearchMain = document.getElementById("SerachTab");
const SearchButton = document.getElementById("Search");




SearchButton.addEventListener("click",()=>{
    if(SearchMain.value === ""){
        CityName.innerText = "";
        CityTEmp.innerText = "";
        PredictionText.innerText = "0";
        WindSpeed.innerText = "0";
    }
    CityName.innerText = SearchMain.value;
   const CityPass = SearchMain.value;
   CheckWeather(CityPass);
})


function DisplayWeather(data){

    if (data === "404") {
        console.log("Not Found Error Occure");
        CityName.innerText = " Not Found ";
        CityTEmp.innerText = " 0";
        PredictionText.innerText = "0";
        WindSpeed.innerText = "0";
    } else {
        
   
    const Tempreture = Math.round(data.main.temp - 273.15);
    const humaditiy = data.main.humidity;
    const WIND = data.wind.speed;
    CityName.innerText = SearchMain.value +(" : ");
    CityTEmp.innerText = Tempreture+(" C");
    PredictionText.innerText = humaditiy;
    WindSpeed.innerText = WIND;
    console.log(data);
    }
}



async function CheckWeather(city) {
    const api_key = "9be52b4933dc6366b30a9994caea68c4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            DisplayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}



