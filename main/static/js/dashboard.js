
// get the value of number entered in the box
function getValue(){
  console.log("in");
  var str = document.getElementById("search_input").value;
  if(str != ""){
    getTrack(str);
  }
}

// get details of the person with that number
function getTrack(phno){
    var data = $.ajax( {
        type: 'GET',     
        url: 'https://covihack.pythonanywhere.com/api/profiles/'+ phno +'/',
        data: {},
        success: function(data) {
            var obj = JSON.parse;
            var x = data;
            // console.log(data);
            console.log(x);
            console.log(x.Name);
            // =================================filling the data for the box===================================================

            $("#name_tag").text("Name: "+x.Name);
            $("#state_tag").text("State: "+x.Home);
            $("#mobile_tag").text("Mobile Number: "+x.Mobile);
            $("#email_tag").text("Email Id: "+x.Email);
            $("#dob_tag").text("DOB: "+x.DateOfBirth);
            $("#probability_tag").text("Probability: "+x.Probability);

            console.log(x.devices_connected.value);
            // for(var i = 0; i < x.devices_connected.length;i++){
            //   $("#device_list").append('<li>Came in proximity to '+x.devices_connected[i]+'on '+x.devices_connected[i].last+' </li>');
            // }
            //temporary
            $("#device_list").append('<li>Came in proximity to '+ x.devices_connected +'on '+x.devices_connected.last+' </li>');



            // ==============================================================
        }


    });
    return data;
}


              var map;
              function initMap() {
                map = new google.maps.Map(
                    document.getElementById('map-canvas-dashboard'),
                    {center: new google.maps.LatLng(-33.91722, 151.23064), zoom: 14});
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