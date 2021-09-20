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
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// accessing airport geoJSON URL
let airportData = "https://raw.githubusercontent.com/apaneser/Mapping_Earthquakes/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our geoJSON data
d3.json(airportData).then(function(data){
    console.log(data);
    // creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        onEachFeature(feature, layer){
            layer.bindPopup("<h1>Airport Code: " + feature.properties.faa + "</h1><h2> Airport Name: " + feature.properties.name + "</h2><h3>City: " + feature.properties.city + ", " + feature.properties.country + "</h3>")
        }
    }).addTo(map);
})






// GeoJSON practice

// // Add GeoJSON data
// let sanFranAirport =
// {
//     "type":"FeatureCollection", "features":[{
//         "type":"Feature",
//         "properties":{
//             "id":"3469",
//             "name":"San Francisco International Airport",
//             "city": "San Francisco",
//             "country": "United States",
//             "faa":"SFO",
//             "icao": "KSFO",
//             "alt":"13",
//             "tz-offset":"-8",
//             "dst":"A",
//             "tz": "America/Los_Angeles"},
//         "geometry":{
//             "type": "Point",
//             "coordinates":[-122.375,37.61899948120117]
//         }
//     }]
// };

// grabbing geoJSON data via pointToLayer
// L.geoJSON(sanFranAirport, {
//     // turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng){
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h1>" + feature.properties.name + "</h1>" + "<h2>" + feature.properties.city + ", " + feature.properties.country + "</h2>");
//     }
// }).addTo(map);

// //grabbing geoJSON data using onEachFeature
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer){
//         console.log(layer);
//         layer.bindPopup("<h1>Airport Code: " + feature.properties.faa + "</h1><h2>Airport Name: " + feature.properties.name + "</h2>" );
//     }
// }).addTo(map);


