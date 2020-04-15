
var map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map-hotspot'),
      {center: new google.maps.LatLng(-33.91722, 151.23064), zoom: 16});
  var icons = {
    isolation: {
      icon: ''
    },
    danger_zone: {
      icon: '../static/images/icon.png'
    }
  };
  var features = [
    {
      position: new google.maps.LatLng(-33.91721, 151.22630),
      type: 'danger_zone'
    }, {
      position: new google.maps.LatLng(-33.916988, 151.233640),
      type: 'danger_zone'
    },  {
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: 'danger_zone'
    }
  ];

 
  for (var i = 0; i < features.length; i++) {
      var mag = 20*(i+1);
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: mag,
        fillColor: '#f00',
        fillOpacity: 0.35,
        strokeWeight: 0
      },
      map: map
    });
  };
}