import precincts from '../asset/precinct/precincts';

(function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 40.7831, lng: -73.9712},
    mapTypeId: 'roadmap'
  })

  precincts.forEach(precinct => { drawPolygon(precinct, map) });

})();

function drawPolygon(paths, map) {
  const polygon = new google.maps.Polygon({
    paths,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  polygon.setMap(map);
  polygon.addListener('click', () => {
    alert("hello");
  })
}
