// CODE WAS WRITTEN BY FOLLOWING COURSE MATERIAL, GOOGLE DOCUMENTATION AND DOCUMENTS WRITTEN BY EAMMON SMYTH.

function initMap() {
    
    const mapValues = {
        center: new google.maps.LatLng(7.7156, 80.6919),
        zoom: 6.5,
        zoomControl: false,
    };

// CREATING THE MAP INSIDE THE DIV WITH ID="MAP", ADDING MARKER TO MAPS WITH NAMES AND INFO 

    const map = new google.maps.Map(document.getElementById("map"), mapValues);
    const myMarks = [{"lat": 5.9448, "lng": 80.4586, "name": "Mirissa", "logo":"assets/images/beach_icon.png", "information":`Breath the sea side                                              vibe, lay on white sandy beaches, <a href="mirissa.html">more info</a>.`},
                    {"lat": 8.6941, "lng": 81.1894, "name": "Nilaveli","logo":"assets/images/beach_icon.png", "information":`Relax to the view of an infinite beach outlined by coconat trees, <a href="nilaveli.html">more info</a>.`},
                    {"lat": 7.9384, "lng": 81.0049, "name": "Polonnaruwa","logo":"assets/images/temple_icon.png", "information":`Explore the outstanding and remains of the royal ancient city of the Kingdom of Polonnaruwa <a href="polonnaruwa.html">more info</a>.`},                                                                   
                    {"lat": 8.3444, "lng": 80.3986, "name": "Anuradhapura","logo":"assets/images/temple_icon.png", "information":`One of the ancient capitals of Sri Lanka,visit the stunning ruins of the Sinhala civilization <a href="anuradhapura.html">more info</a>.`},
                    {"lat": 6.87100, "lng":81.0489, "name": "Ella","logo":"assets/images/peak_icon.png", "information":`Come and taste the original Cylon tea, visit tea plantations and and green infininate hills <a href="ella.html">more info</a>.`}
    ];

    var infoObj = [];

    for(i = 0; i < myMarks.length; i++){
        let contentString = `<h4>` + myMarks[i].name + `</h4>` + `<p>` + myMarks[i].information + `</p>`;

        const markerPosition = new google.maps.Marker({

        position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
        map: map,
        icon: myMarks[i].logo,
        title: myMarks[i].name,
        animation: google.maps.Animation.DROP,
        }); 

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

        
// SETTING ON CLICK LISTENER TO OPEN INFO WINDOW ABOVE CUSTOM MARKERS
        markerPosition.addListener("click", function() {
            closeOtherInfo();
            infowindow.open(map, markerPosition);
            infoObj[0] = infowindow;
        });
    }

    function closeOtherInfo() {
        if(infoObj.length > 0){
            infoObj[0].set("markerPosition", null);
            infoObj[0].close();
            infoObj[0].length = 0;
            infoWindow.close();
        }
    }

//CODE WAS WRITTEN BY FOLLOWING GOOGLE DOCUMENTATION AND TREAD FROM STACK OVERFLOW REFER TO README.MD FILE FOR LINK TO CODE.
//ADDING SEARCH BOX IN GOOGLE MAP 

    places = new google.maps.places.PlacesService(map);
    infoWindow = new google.maps.InfoWindow({
      content: document.getElementById('info-content')
    });
 

    let input = document.getElementById("search-box-map");
    let searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);
 
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });
    
// ADDING LISTENER WHEN THE USER SELECT RESULT FROM SEARCHBOX 

    var markers = [];

    searchBox.addListener("places_changed", () =>{
        let places = searchBox.getPlaces();
        if (places.length == 0){
            return;
        }

        markers.forEach((marker)=>{
            marker.setMap(null);
        });

        markers = [];

    let bounds = new google.maps.LatLngBounds();
    var count = 0;
    places.forEach((place) => {
        if (!place.geometry) {
            return;
        }
    
// CREATE MARKER FOR EACH PLACE SEARCHED
    markers.push(
        new google.maps.Marker({
            map, 
            title: place.name,
            position: place.geometry.location,
        })
    );

    markers[count].placeResult = place;
            
    google.maps.event.addListener(markers[count], 'click', showInfoWindow);

    if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
    } else {
        bounds.extend(place.geometry.location);
    }

    count++;
    });

    map.fitBounds(bounds);
    });
// ADDING INFO WINDOWS TO SEARCHED PLACE/MARKERS
    function showInfoWindow() {
            var marker = this;
            places.getDetails({placeId: marker.placeResult.place_id},
                function(place, status) {
                if (status !== google.maps.places.PlacesServiceStatus.OK) {
                    return;
                }
                infoWindow.open(map, marker);
                buildIWContent(place);
                infoObj[0].close();
            });
    }

    function buildIWContent(place) {
            document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
                'src="' + place.icon + '"/>';
            document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
                '">' + place.name + '</a></b>';
            document.getElementById('iw-address').textContent = place.vicinity;     
    }

// RESET MAP ZOOM
    $('#reset').click(function(){
        map.setCenter({lat:7.7156, lng:80.6919});
        map.setZoom(7.5);
    });
}