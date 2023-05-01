// L.control.polylineMeasure().addTo(map);
// var options = {
//     position: 'topleft',
//     unit: 'landmiles',
//     clearMeasurementsOnStop: true,
//     measureControlTitleOn: 'Turn on',
//     measureControlTitleOff: 'Turn off',
//     fixedLine: {
//         color: '#006',
//         weight: 2
//     },
// }
// L.control.polylineMeasure(options).addTo(map);

var WildRydes = window.WildRydes || {};
WildRydes.map = WildRydes.map || {};


var
  _firstLatLng,
  _firstPoint,
  _secondLatLng,
  _secondPoint,
  _distance,
  _length,
  _polyline
// _map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(_map);

// add listeners to click, for recording two points
_map.on('click', function(e) {

  if (!_firstLatLng) {
    _firstLatLng = e.latlng;
    _firstPoint = e.layerPoint;
    L.marker(_firstLatLng).addTo(_map).bindPopup('Point A<br/>' + e.latlng + '<br/>' + e.layerPoint).openPopup();
  } else {
    _secondLatLng = e.latlng;
    _secondPoint = e.layerPoint;
    L.marker(_secondLatLng).addTo(_map).bindPopup('Point B<br/>' + e.latlng + '<br/>' + e.layerPoint).openPopup();
  }

  if (_firstLatLng && _secondLatLng) {
    // draw the line between points
    L.polyline([_firstLatLng, _secondLatLng], {
      color: 'red'
    }).addTo(_map);

    refreshDistanceAndLength();
  }
})

_map.on('zoomend', function(e) {
  refreshDistanceAndLength();
})

function refreshDistanceAndLength() {
  _distance = L.GeometryUtil.distance(_map, _firstLatLng, _secondLatLng);
  _length = L.GeometryUtil.length([_firstPoint, _secondPoint]);
  document.getElementById('distance').innerHTML = _distance;
  document.getElementById('length').innerHTML = _length;
}