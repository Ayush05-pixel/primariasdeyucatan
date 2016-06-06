var API_KEY = "AIzaSyBsJ2oXkblpF2C06meTvhGBGzyKuhjj1wA";

function initMap(){
    var initCoords = {lat:21.047400,  lng:-89.644600};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: initCoords
    });
    console.log('MAP INIT');
}
