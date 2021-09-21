// Add console.log to see if the code is working
console.log("working");

// We create the tile layer that will be in the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Creat a base layer that holds the  maps
let baseMaps = {
    Street: streets,
    Satellite: satelliteStreets,
}

// Create the map object with a center and zoom level
let map = L.map('mapid', {
    center: [39.5,-98.5],
    zoom: 3,
    layers: [streets]
})

// pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// creating style for the lines
let myStyle = {
    color: "#ff0000",
    fillColor: "#f81894",
    weight: 1
}

// Grabbing our geoJSON data
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(function(data){
    // creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        style: myStyle,
        onEachFeature(feature, layer){
            layer.bindPopup("<h1>Neighborhood: " + feature.properties.AREA_NAME + "</h1>")
        }
    }).addTo(map);
})