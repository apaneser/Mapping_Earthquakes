// Add console.log to see if the code is working
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14)

// add marker to map for LA, CA
let marker = L.marker([34.0522, -118.2437]);
marker.addTo(map);

// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "lightyellow"
// }).addTo(map);

L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);

// We create the tile layer that will be in the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//add our "greymap" tile layer tot he map
streets.addTo(map);