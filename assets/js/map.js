/* FUNCTION DECLARATION TO CREATE THE MAP */

function initMap() {
    
    const mapValues = {
        center: new google.maps.LatLng(7.7156, 80.6919),
        zoom: 6.5,
    };

/* CREATING THE MAP INSIDE THE DIV WITH ID="MAP", ADDING MARKER TO MAPS WITH NAMES AND INFO */

    const map = new google.maps.Map(document.getElementById("map"), mapValues);

    const myMarks = [{"lat": 5.9448, "lng": 80.4586, "name": "Mirissa", "information":`Breath the sea side vibe, lay on white sandy beaches, <a                                                                                                 href="#">more info</a>.`},
                    {"lat": 8.6941, "lng": 81.1894, "name": "Nilaveli", "information":`Relax to the view of an infinite beach outlined by coconat trees, <a                                                                     href="#">more info</a>.`},
                    {"lat": 7.9384, "lng": 81.0049, "name": "Polonnaruwa", "information":`Explore the outstanding and remains of the royal ancient                                                                                 city of the Kingdom of Polonnaruwa <a href="#">more info</a>.`},                                                                   
                    {"lat": 8.3444, "lng": 80.3986, "name": "Anuradhapura", "information":`One of the ancient capitals of Sri Lanka,visit the stunning                                                                              ruins of the Sinhala civilization <a href="#">more info</a>.`},
                    {"lat": 6.87100, "lng":81.0489, "name": "Ella", "information":`Come and taste the original Cylon tea, visit tea plantations and                                                                         and green infininate hills <a href="#">more info</a>.`}
    ];
/* OBJECT TO STORE INFORMATION'S MARKER*/

    var infoObj = [];

    for(i = 0; i < myMarks.length; i++){
        let contentString = `<h4>` + myMarks[i].name + `</h4>` + `<p>` + myMarks[i].information + `</p>`;

        const markerPosition = new google.maps.Marker({

        position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
        map: map,
        title: myMarks[i].name,
        animation: google.maps.Animation.DROP,
        });

/* CREATING INFOWINDOW */

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });
/* SETTING OUR CLICK LISTENER TO DISPLAY INFO ON MARKERS*/
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
        }
    }
}
/* CALL FUNCTION TO INITIATE MAP*/
initMap();

               

                