btn.addEventListener('click', myFunction)
document.addEventListener('keypress', func)
function func (event) {
  if (event.key === 'Enter') {
    myFunction()
  }
}
locat = 'India'
function myFunction () {
  locat = document.getElementById('search').value
  console.log(locat)
  let url = `https://api.weatherapi.com/v1/forecast.json?key=e3721a1b1fd44104be2194122230903&q=${locat}&days=1&aqi=no&alerts=no`
  ihtml = ''
  let response = fetch(url)
  response
    .then(weath_data => {
      return weath_data.json()
    })
    .then(weath_data => {
      ihtml += `<h3> Current Weather of ${weath_data.location.name},${weath_data.location.region} </h3>
    <div id="datadiv">
    <div> <img id="dataimg" src=${weath_data.current.condition.icon}
    alt=${weath_data.current.condition.text}
    <span id="temp"><span id=temp_c>${weath_data.current.temp_c}<span id="deg_c">&#8451;</span></span></span></div>
    <div> <span id="othdata">
    <p>${weath_data.current.condition.text}</p>
    <p>Time last updated: ${weath_data.current.last_updated}</p>
    <p>Wind: ${weath_data.current.wind_dir}  ${weath_data.current.wind_kph} KPH <i class="fa-solid fa-wind"></i></p>
    <p>Humidity: ${weath_data.current.humidity}% <i class="fa-solid fa-droplet-percent"></i></p>
    <p>Visiblity: ${weath_data.current.vis_km} Km <i class="fa-solid fa-eye"></i> </p>
    </span></div> 
    </div>`

    document.getElementById('forecast').innerHTML = ''
    for (const key in weath_data.forecast.forecastday[0].hour) {
      let date = new Date(weath_data.forecast.forecastday[0].hour[key].time)

      console.log(weath_data.forecast.forecastday[0].hour[key])
      ihtml2 = `<div id="hour"><span id=for_temp>${
        weath_data.forecast.forecastday[0].hour[key].temp_c
      }<span id="deg_c_hour">&#8451;</span><img src=${
        weath_data.forecast.forecastday[0].hour[key].condition.icon
      }
  alt=${
    weath_data.forecast.forecastday[0].hour[key].condition.text
  }></span><div>
    <p>${
      weath_data.forecast.forecastday[0].hour[key].condition.text
    }</p>
    <p>Wind: ${weath_data.forecast.forecastday[0].hour[key].wind_dir} ${weath_data.forecast.forecastday[0].hour[key].wind_kph} KPH</p>
    <p>Humidity: ${weath_data.forecast.forecastday[0].hour[key].humidity}%</p>
    <p>AT: ${
        date.getHours() +
        ':' +
        date.getMinutes() +
        '0:' +
        date.getSeconds() +
        '0'
      }</p>
    `
      document.getElementById('forecast').innerHTML += ihtml2
    }
      curr.innerHTML = ihtml
      warn.innerHTML = ''
    })
    .catch(errr => {
      if(locat===""){
        ihtml="ENTER A PLACE";
      }else{
      ihtml = `NO MATCHING LOCATION FOUND!`;
      }
      warn.innerHTML = ihtml
    })
}


let defurl = `https://api.weatherapi.com/v1/forecast.json?key=e3721a1b1fd44104be2194122230903&q=INDIA&days=1&aqi=no&alerts=no`

ihtml = ''
let response = fetch(defurl)
response
  .then(weath_data => {
    return weath_data.json()
  })
  .then(weath_data => {
    console.log(weath_data)
    ihtml += `<h3> Current Weather of ${weath_data.location.name},${weath_data.location.region} </h3>
    <div id="datadiv">
    <div> <img id="dataimg" src=${weath_data.current.condition.icon}
    alt=${weath_data.current.condition.text}
    <span id="temp"><span id=temp_c>${weath_data.current.temp_c}<span id="deg_c">&#8451;</span></span></span></div>
    <div> <span id="othdata">
    <p>${weath_data.current.condition.text}</p>
    <p>Time last updated: ${weath_data.current.last_updated}</p>
    <p>Wind: ${weath_data.current.wind_dir}  ${weath_data.current.wind_kph} KPH <i class="fa-solid fa-wind"></i></p>
    <p>Humidity: ${weath_data.current.humidity}% <i class="fa-solid fa-droplet-percent"></i></p>
    <p>Visiblity: ${weath_data.current.vis_km} Km <i class="fa-solid fa-eye"></i> </p>
    </span></div> 
    </div>`


    document.getElementById('forecast').innerHTML = ''
    for (const key in weath_data.forecast.forecastday[0].hour) {
      let date = new Date(weath_data.forecast.forecastday[0].hour[key].time)

      console.log(weath_data.forecast.forecastday[0].hour[key])
      ihtml2 = `<div id="hour"><span id=for_temp>${
        weath_data.forecast.forecastday[0].hour[key].temp_c
      }<span id="deg_c_hour">&#8451;</span><img src=${
        weath_data.forecast.forecastday[0].hour[key].condition.icon
      }
  alt=${
    weath_data.forecast.forecastday[0].hour[key].condition.text
  }></span><div>
    <p>${
      weath_data.forecast.forecastday[0].hour[key].condition.text
    }</p>
    <p>Wind: ${weath_data.forecast.forecastday[0].hour[key].wind_dir} ${weath_data.forecast.forecastday[0].hour[key].wind_kph} KPH</p>
    <p>Humidity: ${weath_data.forecast.forecastday[0].hour[key].humidity}%</p>
    <p>AT: ${
        date.getHours() +
        ':' +
        date.getMinutes() +
        '0:' +
        date.getSeconds() +
        '0'
      }</p>
    `
      document.getElementById('forecast').innerHTML += ihtml2
    }

    curr.innerHTML = ihtml
  })
  .catch(errr => {
    console.error(errr)
  })
