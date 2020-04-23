function initMap() {
  var object1 = document.getElementById('gmaps');
  var location1 = new google.maps.LatLng(21.283952, -157.709427);
  var options1 = {
    center: location1,
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  var gmap = new google.maps.Map(object1, options1);
}
google.maps.event.addDomListener(window, 'load', initMap);

