(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
function dataLoader(map){
    return function loadJsonData(){
        var data = this.responseText;
        data = JSON.parse(data);
        var heatPoints = [];
        for (var d of data){
            let point = new google.maps.LatLng(d.coords);
            heatPoints.push(point);
        }


        var pointArray = new google.maps.MVCArray(heatPoints);

        var heatMap = new google.maps.visualization.HeatmapLayer({
            data: pointArray,
            radius: 50
        });

        heatMap.setMap(map);
    };
}

function loadSchools(map){
    var loader = dataLoader(map);
    var req = new XMLHttpRequest();
    req.addEventListener('load', loader);
    req.open('GET', 'data/schools_coords.json');
    req.send();
}

function initMap(){
    var initCoords = {lat:21.047400,  lng:-89.644600};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: initCoords
    });

    loadSchools(map);
}

global.initMap = initMap;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
require('./heatmap.js');

},{"./heatmap.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvaW8uanMvdjMuMy4xL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9oZWF0bWFwLmpzIiwic3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDekNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gZGF0YUxvYWRlcihtYXApe1xuICAgIHJldHVybiBmdW5jdGlvbiBsb2FkSnNvbkRhdGEoKXtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIHZhciBoZWF0UG9pbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGQgb2YgZGF0YSl7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGQuY29vcmRzKTtcbiAgICAgICAgICAgIGhlYXRQb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZhciBwb2ludEFycmF5ID0gbmV3IGdvb2dsZS5tYXBzLk1WQ0FycmF5KGhlYXRQb2ludHMpO1xuXG4gICAgICAgIHZhciBoZWF0TWFwID0gbmV3IGdvb2dsZS5tYXBzLnZpc3VhbGl6YXRpb24uSGVhdG1hcExheWVyKHtcbiAgICAgICAgICAgIGRhdGE6IHBvaW50QXJyYXksXG4gICAgICAgICAgICByYWRpdXM6IDUwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhlYXRNYXAuc2V0TWFwKG1hcCk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZFNjaG9vbHMobWFwKXtcbiAgICB2YXIgbG9hZGVyID0gZGF0YUxvYWRlcihtYXApO1xuICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRlcik7XG4gICAgcmVxLm9wZW4oJ0dFVCcsICdkYXRhL3NjaG9vbHNfY29vcmRzLmpzb24nKTtcbiAgICByZXEuc2VuZCgpO1xufVxuXG5mdW5jdGlvbiBpbml0TWFwKCl7XG4gICAgdmFyIGluaXRDb29yZHMgPSB7bGF0OjIxLjA0NzQwMCwgIGxuZzotODkuNjQ0NjAwfTtcbiAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgem9vbTogMTQsXG4gICAgICAgIGNlbnRlcjogaW5pdENvb3Jkc1xuICAgIH0pO1xuXG4gICAgbG9hZFNjaG9vbHMobWFwKTtcbn1cblxuZ2xvYmFsLmluaXRNYXAgPSBpbml0TWFwO1xuIiwicmVxdWlyZSgnLi9oZWF0bWFwLmpzJyk7XG4iXX0=
