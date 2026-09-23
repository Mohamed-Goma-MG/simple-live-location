const latEle = document.getElementById("longitude")
const longEle = document.getElementById("latitude")

const latVEle = latEle.getElementsByClassName("value")[0]
const longVEle = longEle.getElementsByClassName("value")[0]

console.log(latEle, latVEle, longEle, longVEle)

navigator.geolocation.watchPosition(({coords: {latitude, longitude}}) => {
  latVEle.textContent = latitude
  longVEle.textContent = longitude

  console.log("location", {latitude, longitude})
}, ({message}) => {
  console.error(message) // ! => User denied geolocation prompt
})
