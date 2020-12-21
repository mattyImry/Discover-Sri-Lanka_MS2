// Code learned via Code Instituite Interactive Fronend end module, youTube Tutorial https://www.youtube.com/watch?v=Zxf1mnP5zcw google documnetation MapsAPI
//on read me explain that you choose to use this code instead of course one because i wanted to ad pics to marker and text and the video on you tube looked cleaner.

function initMap() {
    let options =  {
        zoom: 6.5,
        center: { lat: 8.89, lng: 81.89 },
    };
               

                /*let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

                let locations =[
                    { lat:5.9460, lng:80.4612 }, //mirissa
                    { lat:6.0355, lng:80.2152 }, //Galle 
                    { lat:7.9382, lng:81.0119 }, //polonna
                    { lat:8.6942, lng:81.1878 }, // nilaveli 
                ];
                        
                let markers = locations.map(function(location, i){
                    return new google.maps.Marker({
                        position : location,
                        label: labels[i % labels.length],
                    });
                });

                new MarkerClusterer(map, markers, {
                        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
                });*/

    var map = new google.maps.Map(document.getElementById("map"),options);

                var markers = [
                    {   geoLog:{lat:5.9460, lng:80.4612},
                        //markerImage: "assets/images/beach.jpg",
                        content: "<h4>Mirissa</h4>, type: relaxing,<a href=#>more info</a>"
                    },

                    {   geoLog:{lat:6.0355, lng:81.0119},
                        //markerImage: "assets/images/beach.jpg",
                        content: "<h4>Galle</h4>, type: cultural,<a href=#>more info</a>"
                    },

                    {   geoLog:{lat:7.9382, lng:81.1878},
                        //markerImage: "assets/images/beach.jpg",
                        content: "<h4>Polonna</h4>, type: cultural,<a href=#>more info</a>"
                    },

                    {   geoLog:{lat:8.6942, lng:81.1878},
                        //markerImage: "assets/images/beach.jpg",
                        content: "<h4>Polonna</h4>, type: cultural,<a href=#>more info</a>"
                    },
                ];

            for (var i = 0; i < markers.length; i++){
                addMarker(markers[i]);
            }
            
                    // adding markerfunction

    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.geoLog,
            map: map,
        });

                    // check for image marker
        if(props.markerImage){
            marker.setIcon(props.markerImage); 
        }
                    //checkinh information on marker
        if (props.info) {
            var infoWindow = new google.maps.InfoWindow({
            content: props.content,
            });

            marker.addListener("click", function(){
               infoWindow.open(map, marker);
               infoWindow.close();
            });
        }

    }

                
}
        
