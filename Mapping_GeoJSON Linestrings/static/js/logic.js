// Add console.log to see if the code is working
console.log("working");

// We create the tile layer that will be in the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Creat a base layer that holds the  maps
let baseMaps = {
    Street: streets,
    Dark: dark,
    Light: light
}

// Create the map object with a center and zoom level
let map = L.map('mapid', {
    center: [44.0,-88.0],
    zoom: 2,
    layers: [light]
})

// pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// accessing airport geoJSON URL
let torontoData = "https://raw.githubusercontent.com/apaneser/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/Mapping_GeoJSON%20Linestrings/torontoRoutes.json";

// creating style for the lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our geoJSON data
d3.json(torontoData).then(function(data){
    console.log(data);
    // creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        style: myStyle,
        onEachFeature(feature, layer){
            layer.bindPopup("<h1>Airline: " + feature.properties.airline + "</h1><h2> Destination: " + feature.properties.dst + "</h2>")
        }
    }).addTo(map);
})