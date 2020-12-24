Interactive Front End Development Project Milestone 2 - Code Institute

![Screenshotproject]

# **_Sri Lanka Pearl of Asia_**

This is my second Milestone Project for the [Code Institute](https://codeinstitute.net/) Fullstack Web Developer Diploma. This project is designed to demostrate the skills learnt on the Interactive Frontend Development module. I have choosen to design a website where I can demostrate that I have augumented my HTML and CSS skill but also that I can use JavaScript with JQuery library and public API's to crate a more interactive website.

## **_UX_**

### **_Strategy_**

 I have designed this website to help the User explore different Sri Lankan locations. The User can view the locations on Google maps. TO BE COMPLETED.

 ### **_Scope_**

 The features I want to implement are :
 
 * Showing Google maps by using Google maps' API 

 * Ability to search facilities and places with search function in Google maps

 * EmaliJs functionality 

 * Active web links 

 * Easy navigation and layout

 * Mobile first approch

### **_Structure_**

The different locations are devided in three main groups depending on what the User is interested in : Relaxing, Cultural and Nature. Inside each group the User will find links of two location's pages which will also be visible on the Google Map. Google Map will use its own API to display custom markers for showing the location on the map and the use of Google API Places to be able to use a search bar whithin the map.

### **_Skeleton_**

The information for the locations will be represented in two way.
1. The User can view from Google maps the geographical location of the destination and by clicking the map's markers can view few key information and by clicking the link can access the page's location in the Navbar.
2. The User can choose to view the location's information by the clicking the drop down menu in the Navbar.

A contact page link will also be present in the Navbar.

### **_Surface_**

I am looking to achive a visually satisfying web site by using high quality pictures and minimalistic style. I have implemented mobile first approch by using Bootstrap 4. The website will be using .... from Google Font .
The colors will be minimal due to the usage of full screen pictures. Also I decided to use transparent Navbar ,Footer to allow the picture to be the main element of the pages 
/ADD COLOR USED IN PAGES/


### **_User Story_**

* As a tourist I want to be able to discover where is the geographical location of Sri Lanka and where the locations stated in the website are located. I want to be able to see different type of locations. I want to be able to gather more information about Sri Lanka by using links to external pages. I want to be able to , by using the search box in the map, facilities and places to visit. I also want to be able to use a contact form in case more information are needed.
The tourist can come back to check for new locations added to the website.

* 


* As a local resident I want to be able to find more information about other locations in Sri Lanka via links to external pages and with the use of the interactive map. 
The local resident can come back to the site to see if new location and information have been added to the website.


### **_Wireframe_**

Link to Wireframes folder: ADD WIREFRAME FOLDER

For designing the Wireframes I have used [Balsamiq](https://balsamiq.com/).
During the planning stage, when I have designed the Wireframes, I have made the landing page with a full picture and a button that when clicked will let you reach the map page.
After speaking with my mentor He suggested that the landing page with the button wasn't necessary, in his opinion, due to the fact that pictures where used in the page extesivily and that the landing page with the button was only making the web site less efficient. After thinking about the suggestion and trying to add the page and use it, I realised that the landing page with the button wasn't necessary. I have left the unused wireframe inside the folder anyway.


## **_Features_**

### **_Existing Features_**


## **_Credits_**

* The code for Google Maps API has been writter with the support of the documents written by Eamonn Smyth , [Google documentation](https://developers.google.com/maps/documentation/javascript/tutorials), [Youtube tutorial](https://www.youtube.com/watch?v=Xptz0GQ2DO4) by [Pradip Debnath](https://www.youtube.com/channel/UC43N9Z8Fm0gg1Lgpw0eS9rg).

* The code for Google map API search box functionality has been writter with the support of the [Google documentation](https://developers.google.com/maps/documentation/javascript/examples/places-searchbox#maps_places_searchbox-javascript).

* The marker's custom icons in the map are credited to [Maps Icons Collection](https://mapicons.mapsmarker.com).

### **_Bugs and fixes_**

* Issue 1- When using Google maps search box the search works but the icon displayed on the map related to the search are not rendering correctly on the map.

    Solution 1- Found that when Google Searchbox was trying to create a marker using the marker constructor for the related search , a key object `icon:` was used . This property was creating an icon on the map which wasn't rendered correctly. By removing the key object `icon:` from the marker constructor and the related variable called `icon` the issue has been solve. Now if I search a location or a facilitie a red marker will show without causing any issue. Also the search now is quicker.