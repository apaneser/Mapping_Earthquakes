// Add console.log to see if the code is working
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([39, -98], 5)

// We create the tile layer that will be in the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//add our "greymap" tile layer tot he map
streets.addTo(map);

let line = [
    [37.6189, -122.375],
    [30.1974, -97.6663],
    [43.6836, -79.6149],
    [40.6397, -73.7789]
];

L.polyline(line, {
    color: "blue",
    dashArray: '4',
    opacity: 0.5
}).addTo(map);