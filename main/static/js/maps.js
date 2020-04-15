
    // var map;
    // var json = [{"id":48,"title":"Helgelandskysten","longitude":"12.63376","latitude":"66.02219"},{"id":46,"title":"Tysfjord","longitude":"16.50279","latitude":"68.03515"},{"id":44,"title":"Sledehunds-ekspedisjon","longitude":"7.53744","latitude":"60.08929"},{"id":43,"title":"Amundsens sydpolferd","longitude":"11.38411","latitude":"62.57481"},{"id":39,"title":"Vikingtokt","longitude":"6.96781","latitude":"60.96335"},{"id":6,"title":"Tungtvann- sabotasjen","longitude":"8.49139","latitude":"59.87111"}];
    // var json_clone;
    // // window.onload = function() {
    // //     var url = 	'http://139.59.85.163/main/get_location/';
    // //   var xhttp = new XMLHttpRequest();
    // //   xhttp.onreadystatechange = function() {
    // //         if ( this.readyState == 4 && this.status == 200 ) {
    // //             var json = JSON.parse(xhttp.responseText).location;
    // // initialize(json);
    // // console.log(json);
    // // }}
    // // xhttp.open("GET", url, true);
    // // xhttp.send({'request': "authentication token"});
    // // }
    // window.onload= function initialize(json) {
    //   var mapOptions = {
    //     zoom: 2,
    //     center: new google.maps.LatLng(json[0].latitude,json[0].longitude)
    //   };
    //   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    //   for(var i = 0; i < json.length; i++) {
    //     var obj = json[i];
    //     var marker = new google.maps.Marker({
    //       position: new google.maps.LatLng(obj.latitude,obj.longitude),
    //       map: map,
    //       name: obj.id 
    //     });
    //     var clicker = addClicker(marker, obj.id);
    // }
     
    //   function addClicker(marker, content) {
    //           google.maps.event.addListener(marker, 'click', function() {
    
    //             if (infowindow) {infowindow.close();}
    //             infowindow = new google.maps.InfoWindow({content: content});
    //             infowindow.open(map, marker);
    //           });
    //   }
    // google.maps.event.addDomListener(window, 'load', initialize);
    // }


// This is temporary as i dont know api endpoints
    var map;
    function initMap() {
      map = new google.maps.Map(
          document.getElementById('map-canvas'),
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
        var marker = new google.maps.Marker({
          position: features[i].position,
          icon: {
            url: icons[features[i].type].icon,
            size: {
                width: 40,
                height: 40
             }
           },
          map: map
        });
      };
    }