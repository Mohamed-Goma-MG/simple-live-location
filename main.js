const latEle = document.getElementById("longitude");
const longEle = document.getElementById("latitude");

const latVEle = latEle.getElementsByClassName("value")[0];
const longVEle = longEle.getElementsByClassName("value")[0];

console.log(latEle, latVEle, longEle, longVEle);

navigator.geolocation.watchPosition(
  ({ coords: { latitude, longitude } }) => {
    latVEle.textContent = latitude;
    longVEle.textContent = longitude;

    console.log("location", { latitude, longitude });
  },
  ({ message }) => {
    console.error(message); // ! => User denied geolocation prompt
  },
);

var map = L.map("map").setView([31.2737792, 30.1400064], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
