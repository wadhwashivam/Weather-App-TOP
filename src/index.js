import "./style.css";

async function fetchData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=days%2Ccurrent%2Calerts%2Chours&key=UVQ7NN7EYRGB86T3KYEM5Z9T5&contentType=json`,
  );

  if (!response.ok) {
    throw new Error("Location is not found. Please try again!");
  }

  const data = await response.json();
  console.log(data);
  return {
    temp: data.currentConditions.temp,
    feelslike: data.currentConditions.feelslike,
    conditions: data.currentConditions.conditions,
    humidity: data.currentConditions.humidity,
  };
}

const btn = document.getElementById("locationBtn");
btn.addEventListener("click", async (event) => {
  event.preventDefault();

  const location = document.getElementById("locationInput").value;
  const box = document.querySelector(".content");

  box.innerHTML = "Loading...";

  console.log(location);

  try {
    const weather = await fetchData(location);

    function fToC(temperature){
      let tempInF = temperature;
      let tempInC = (tempInF - 32)/1.8;
      return tempInC;
    }

    let temp = fToC(weather.temp);
    let feelsLike = fToC(weather.feelslike);
    let humidity = fToC(weather.humidity);

    box.innerHTML = `<span>Temperature: ${temp} Celsius</span><br><span>Feels Like: ${feelsLike} Celsius</span><br> <span>Conditions: ${weather.conditions}</span><br><span>Humidity: ${humidity} Celsius</span>`;
  } catch (error) {
    box.innerHTML = `<span style="color:red;">${error.message}</span>`;
    console.error(error);
  }
});
