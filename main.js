const cityInput = document.querySelector(".inputText")

const btn = document.querySelector(".btn")

btn.addEventListener('click' , () => {
    // console.dir(cityInput) value alma
    const cityName = cityInput.value

    getData(cityName)

})

function getData(name){
    const API = "53ab67cab3437a060008dc483a160882";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;

    fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        const {name, sys:{country}, main:{temp, feels_like, humidity}, weather: [{description}], wind: {speed}} = data;

        //VERİLERİ ÇEKME
        const city = document.querySelector(".city")
        const temperature = document.querySelector(".temp")
        const hum = document.querySelector(".humidity")
        const wind = document.querySelector(".wind")
        const weatherDesc = document.querySelector(".weather")
        const feeling = document.querySelector(".feeling")

        //ÇEKİLEN ELEMANLARI YERİNE YERLEŞTİRME
        city.textContent = `${name} , ${country}`
        temperature.innerText = `${temp.toFixed()}°`
        hum.textContent = `Nem: %${humidity}`
        wind.textContent = `Rüzgar: ${speed} km/s`
        weatherDesc.innerHTML = `Hava Durumu: <i>${description.toUpperCase()}<i/>`
        feeling.textContent = `Hissedilen Sıcaklık: ${feels_like.toFixed()}°`
    })
    .catch(err => console.log(err))

    cityInput.value = "";

    cityInput.focus();
}



