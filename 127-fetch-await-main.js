// function getWeather(woeid) {
//   fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//   .then((result) => {
//     // console.log(result);
//     return result.json()
//   })
//   .then((data) => {
//     let today = data.consolidated_weather[0]
//     let dom = document.getElementById('promise-two')
//     dom.innerHTML = `Temperature in ${data.title} will stay between ${today.min_temp}C and ${today.max_temp}C`
//     console.log(`Temperature in ${data.title} will stay between ${today.min_temp}C and ${today.max_temp}C`)
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }

// getWeather(44418);
// getWeather(2487956);

//async functions return a promise
async function getWeatherAW(woeid) {
  //try catch for errors
  try {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
    const data = await result.json();
    let tomorrow = data.consolidated_weather[0]
    let dom = document.getElementById('promise-two');

    dom.innerHTML = `Temperature tomorrow in ${data.title} will stay between ${tomorrow.min_temp}C and ${tomorrow.max_temp}C`;

    console.log(`Temperature tomorrow in ${data.title} will stay between ${tomorrow.min_temp}C and ${tomorrow.max_temp}C`);
    //this data that we return here is the value of the promise.
    //you can have access to it by using the .then() method
    return data;
  } catch(error) {
    alert(error);
  }
}

//this is a promise
getWeatherAW(2487956);

//How to store data. Since async functions returns a promise you grab it with a .then()
let dataLondon;
//this is a promise with a .then() method
getWeatherAW(44418).then(data => {
  dataLondon = data;
  console.log(dataLondon);
  console.log(dataLondon.title);
  let idtag = document.getElementById('promise-three')
  idtag.innerHTML = dataLondon.title
});

