
// get the value of number entered in the box
function getValue(){

  // console.log("in");
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
            // console.log(x);
            // console.log(x.Name);

            // clear the existing li elements of previous result

            $(".contacted").remove();
            $("#map-canvas-dashboard").remove();
            $("#map_zone").append('<div id="map-canvas-dashboard"></div>');

            // =================================filling the data for the box===================================================

            $("#name_tag").text("Name: "+x.Name);
            $("#state_tag").text("State: "+x.Home);
            $("#mobile_tag").text("Mobile Number: "+x.Mobile);
            $("#email_tag").text("Email Id: "+x.Email);
            $("#dob_tag").text("DOB: "+x.DateOfBirth);
            $("#probability_tag").text("Probability: "+x.Probability);

            // console.log(x.devices_connected);
            for(var i = 0; i < x.devices_connected.length;i++){
              $("#device_list").append('<li>Came in proximity to '+x.devices_connected[i].Name+', Mobile Number: '+x.devices_connected[0].Mobile+' </li>');
            }
            //temporary
            // $("#device_list").append('<li class="contacted">Came in proximity to '+ x.devices_connected[0].Name +', Mobile Number: '+x.devices_connected[0].Mobile+' </li>');



            // =========================hiding map when data not being passed=====================================
              // if(x.timestamps == 'undefined' ){
              //   // console.log("hidepls");
              //   $("#map-canvas-dashboard").css("display","none");
              // }
              // else{
              //   $("#map-canvas-dashboard").css("display","");                
              // }


            // =============================================================
            var map;
            initialize(x);
            function initialize(x) {
              var lat = x.timestamps[0].geo.split(",")[0];
              var long = x.timestamps[0].geo.split(",")[1];
              
        
                var mapOptions = {
                  zoom: 11,
                  center: new google.maps.LatLng( lat,long)
                };
                map = new google.maps.Map(document.getElementById('map-canvas-dashboard'), mapOptions);
               if(x.timestamps == null){
                marker.setMap(null);
               }
                else{
                 
                  var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat,long),
                    icon: {
                      url:'../static/images/icon.png',
                
                    },
                    map: map
                  });
                }
            }
        }
    });
    return data;
}


        


