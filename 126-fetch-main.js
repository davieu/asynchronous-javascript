/************************************************************
 * 126 fetch
 */

//.json() method parses json (string) to javascript object. So you can use it as an object. 
function getWeather(woeid) {
  fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
  .then((result) => {
    // console.log(result);
    return result.json()
  })
  .then((data) => {
    let today = data.consolidated_weather[0]
    let dom = document.getElementById('promise-two')
    dom.innerHTML = `Temperature in ${data.title} will stay between ${today.min_temp} and ${today.max_temp}`
    console.log(`Temperature in ${data.title} will stay between ${today.min_temp} and ${today.max_temp}`)
  })
  .catch((error) => {
    console.log(error);
  });
}

getWeather(44418)
getWeather(2487956)

