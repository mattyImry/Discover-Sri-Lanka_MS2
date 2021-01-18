Interactive Front End Development Project Milestone 2 - Code Institute

![Screenshotproject](https://github.com/mattyImry/Discover-Sri-Lanka_MS2/blob/d4fc7f3982371bb16cb2bbe86e2260c7f2fa378b/assets/media/ms2_screenshot.jpg)

# **_Discover Sri Lanka_**

This is my second Milestone Project for the [Code Institute](https://codeinstitute.net/) Fullstack Web Developer Diploma. This project is designed to demostrate the skills learnt on the Interactive Frontend Development module. I have chosen to design a website where I can demostrate that I have augumented my HTML and CSS skill but also that I can use JavaScript with JQuery library and public API's to crate a more interactive website.
The deployed project can be found here https://mattyimry.github.io/Discover-Sri-Lanka_MS2/

## **_UX_**

### **_Strategy / Site Owner story_**

 I have designed this website to help the User explore different Sri Lankan locations. The User can view the locations on Google maps with the use of custom markers, use a search box in Google maps to search for facilities and other locations within the island or in the world. Use external links to check blogs and to be able to book accomodation. Also the User can use the contact form in the contact page to request more information about Sri Lanka.
 A User can view the  gallery page which will display pictures of Sri Lanka.

 ### **_Scope_**

 The features I want to implement are :
 
 * Showing Google maps by using Google maps' API 

 * Ability to search facilities and places with search function in Google maps with Place API

 * EmailJs functionality 

 * Active web links 

 * Easy navigation and layout

 * Mobile first approach

### **_Structure_**

The different locations are devided in three main groups depending on what the User is interested in: Relaxing, Cultural and Nature. Inside each group the User will find links for the location's pages which will also be visible on the Google Map by clicking the custom markers. Google Map will use its own API to display custom markers for showing the location on the map and the use of Google API Places to be able to use the search bar whithin the map.

### **_Skeleton_**

The information for the locations will be represented in two ways via the infowindows on the map's custom markers and via navbar pages links.

1. The User can view from Google maps the geographical location of the destinations and by clicking the map's markers can view few key informations. At the bottom of the information window, which will open when the user clicks on the map's marker, the link will gain access to the page's locations in the Navbar.
2. The User can choose to view the location's information by hovering on the drop down menu in the Navbar.
3. The User can access external blogs and website inside the locations' pages.
4. A contact page link will also be present in the Navbar with a "Home" button to redirect the user to the home page if needed.
5. The footer in this webside will only hold the copyright logo.
6. The gallery page will display different picture of Sri Lanka.



### **_Surface_**

I am looking to achive a visually satisfying web site by using high quality pictures and minimalistic style. I have implemented mobile first approch by using Bootstrap 4. The website will be using as family font "Lato" for the paragraphs and "Raleway" for menus and titles. Both fonts are taken from [Google Font](https://fonts.google.com/) .
The colors will be minimal due to the usage of full screen pictures. Also I decided to use semi transparent Navbar and Footer because I think that this style gives the website a more streamlined style.
I have used the color #fafafa for navbar links, border and placeholders in the contact form, including the submit buttons. This color has also been used in the copyright text in the footer.
The backgrond color for the text area is #e3edf1. The color #e3edf1 has also been used for the navbar toggler in mobile view, background color for the reset button in the home page. In some pages, when in mobile view, the text has been backed up by a semitransparent black background with text in color #fafafa to ease the reading for the users.


### **_User Story_**

* As a tourist I want to be able to discover where is the geographical location of Sri Lanka and where the locations stated on the website are located.
* As a tourist I want to be able to gather more information about Sri Lanka' locations present on the map by using the links in the navbar.   
* As a tourist I want to be able to, by using the search box in the map, to search for facilities, places to visit, find addresses.  
* As a tourist I want to be able to use a contact form in case more information are needed.
* As a tourist I want to be able, in the future, to come back and check for new locations added to the website.
* As a tourist I want to be able to view pictures of Sri Lanka.
* As a local resident I want to be able to find more information about locations in Sri Lanka via links in the navbar.
* As a local resident I want to be able to, by using the search box in the map, search for facilities and places to visit, find addresses. 
* As a local resident I want to be able, in the future, to come back to the website to see if new locations and information have been added to the website.
* As a local resident I want to be able to view pictures of Sri Lanka.



### **_Wireframe_**

Link to Wireframes folder: [Wireframes](https://github.com/mattyImry/Discover-Sri-Lanka_MS2/tree/master/wireframes)

For designing the Wireframes I have used [Balsamiq](https://balsamiq.com/).
During the planning stage, when I have designed the Wireframes, I made the landing page with a full picture and a button that when clicked was letting you reach the map page.
After speaking with my mentor he suggested that the landing page with the button wasn't necessary, in his opinion, due to the fact that pictures where used in the page extesivily and the landing page with the button was only making the web site less efficient. After thinking about the suggestion and trying to add the page and use it, I realised that the landing page with the button wasn't necessary. I have left the unused wireframe inside the folder anyway.


## **_Features_**

### **_Existing Features_**
 
 * Navbar allows the tourist /local resident to access home page, locations'pages and contact page by clicking or by hovering on the wording.
 * Google Maps allows the tourist /local resident to geographically locate Sri Lanka with the use of [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview).
 * Google Maps allow the tourist /local resident to geographically locate different locations of Sri Lanka with the use of [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview).
 * The search bar within Google Maps allows the tourist to search for locations or facilities in Sri Lanka and elsewhere with the use of [Google Places API](https://developers.google.com/places/web-service/overview).
 * The links inside the information window, which appear when clicking the map's custom markers, will direct the tourist/local resident to the location's pages which are the same pages found in the Navbar.
 * The links inside the location's pages allow the tourist/local resident to look at external websites to gather more informations.
 * The form in the contact page is using [EailJS](https://www.emailjs.com/) functionality that will send an email to the developer email account when the tourist /local resident fill up the form completely and with the correct parameters.
 * The gallery page is a slide show. By clicking the white arrows the tourist /local resident can view different pictures. 

### **_Features to be implemented_**

* Add current user [geolocation](https://developers.google.com/maps/documentation/javascript/geolocation) functionality. 
* Add [Google direction API](https://developers.google.com/maps/documentation/directions/overview).
* Add more locations to the list in Navbar.
* Add the functionality to book accomodation via this website.

## **_Technology Used_**
1. [HTML](https://en.wikipedia.org/wiki/HTML) has been used in this project because is the standard markup language for documents designed to be displayed in a web browser.

2. [CSS](https://en.wikipedia.org/wiki/CSS)
is a style sheet language. It is used to style markup language such as HTML.

3. [Gitpod](https://gitpod.io/) has been used as an on-line IDE followed by [Github](https://github.com/) for deployment. IDE is a software application used by computer programmers for software development.


4. [Googlefonts](https://fonts.google.com/) has been used to style the fonts of the writing on the web site. Fonts used "Lato" and "Raleway". Back up font "sans-serif".

5.  [Bootstrap4](https://getbootstrap.com/) has been used to achive mobile first design and to achive a structured layout. Version number 4.4.1.

6. [jQuery](https://jquery.com/) Bootstrap 4 to achive certain effects needs to refer to [JavaScript](https://www.javascript.com/) technology. 
Also [jQuery](https://jquery.com/) technology has been used to show the links in nav bar by hovering over the links instead of clicking for desktop view. Also the reset button in the home page uses jQuery.

7. [JavaScript](https://www.javascript.com/) has been used to be able to display and add the following functionality: Google Maps, email service in contact page, slide show in gallery page.

8. [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) Has been used to customize and implement the Google Map in the project.

9. [Google Places API](https://developers.google.com/places/web-service/overview) Has been used to retrive information for places within Google Maps using the search box inside the map.
10. [EmailJS](https://www.emailjs.com/) Has been used to be able to receive an email from the User to the developer with a request/message by filling the form in  the contact page.
11. [Tiny JPG](https://tinyjpg.com/) Has been used to compress the pictures to reduce loading time of the project.


## **_Testing_**

For the testing section please refer to [TESTING.md](TESTING.md) file.

## **_Bugs and fixes_**

* Issue 1 When using Google maps search box the search works but the icon displayed on the map related to the search are not rendering correctly on the map.

    Solution 1 Found that when Google Searchbox was trying to create a marker using the marker constructor for the related search, a key object `icon:` was used. This property was creating an icon on the map which wasn't rendered correctly. By removing the key object `icon:` from the marker constructor and the related variable called `icon` the issue has been solved. Now if I search a location or a facility a standard red marker will show without causing any issue. Also the search now is quicker.

* Issue 2 When opening and closing info windows on the map, especially after a search and clicking on the marker to show info windows, I get an intermittent error on the console: error 2 and 3 see picture. [Issue2](https://github.com/mattyImry/Discover-Sri-Lanka_MS2/blob/master/assets/media/issue2.jpg). I have discussed this issue with my mentor and the tutoring team. They checked for the errors but they could not see it on their console. Myself and my mentor have come to the conclusion that the error does not impact the functionality of the webpage.

* Issue 3 When using the Developer tool with Google Chrome and checking the layout on the Ipad Pro for the Gallery page, the layout is incorrect. I do not have an Ipad pro to check physically. Ipad 2 works both on the physical machine and with Developer tool in Google Chrome. I will try to change the picture size to see if changes but do not have enough time now.

## **_Deployment_**

### **_Remote Deployment_**

The website is developed with Gitpod IDE. With the [Code Institute](https://codeinstitute.net/) template I started a new repository. After completing the website the page was deployed remotely following these steps:

1. Log in to [Github](https://github.com/)
2. Go to https://github.com/mattyImry/Discover-Sri-Lanka_MS2
3. Under the repository name open Settings tab
4. Scroll down to find GitHub pages
5. In GitHub pages tab click on None to select the branch to publish
6. In the drop down menu select the folder you want to publish
7.  Click Save


### **_Local Deployment_**


To clone the repository for collaboration to GitHub Desktop following these steps:

1. Log in to [Github](https://github.com/)
2. Go to https://github.com/mattyImry/Discover-Sri-Lanka_MS2
3. Under the repository click Code
4. Click Open with GitHub Desktop to clone
5. Open the repository with GitHub Desktop
6. Follow the promps to complete the cloning and log in to your GitHub account


To clone the repository for collaboration  using the command line following these steps:


1. Log in to [Github](https://github.com/)
2. Go to https://github.com/mattyImry/Discover-Sri-Lanka_MS2
3. Under the repository click Code
4. To clone the repository using HTTPS, click clipboard icon under "Clone with HTTPS"
5. To clone the repository using an SSH key with the Organisation cetificate  click clipboard icon under SSH tab
6. To clone a repository using GitHub CLI, click clipboard icon under GitHub CLI tab
7. Open Git Bash 
8. Change working directory to the location where you want the cloned directory
9. Type in terminal type $ "git clone" ,paste URL from steps before
10. Press enter to create clone

## **_Credits_**

* The code for Google Maps API has been written with the support of the documents written by Eamonn Smyth [pdf here](https://github.com/mattyImry/Discover-Sri-Lanka_MS2/blob/d4fc7f3982371bb16cb2bbe86e2260c7f2fa378b/assets/media/how_to_goggle_map.pdf), [Google documentation](https://developers.google.com/maps/documentation/javascript/tutorials), [Youtube tutorial](https://www.youtube.com/watch?v=Xptz0GQ2DO4) by [Pradip Debnath](https://www.youtube.com/channel/UC43N9Z8Fm0gg1Lgpw0eS9rg).

* The code for Google map API search box functionality has been written with the support of the [Google documentation](https://developers.google.com/maps/documentation/javascript/examples/places-searchbox#maps_places_searchbox-javascript).

* The Reset button idea was taken by this project from [Code Institute](https://codeinstitute.net/) student. Project link [Link](https://github.com/Seabhac-94/southpaw_comedy).

* The code for showing info windows on searched markers has been written with the support of [Stackoverflow](https://stackoverflow.com/questions/44225974/how-can-i-add-info-window-in-places-searchbox)

* The marker's custom icons in the map are credited to [Maps Icons Collection](https://mapicons.mapsmarker.com).
* The code for adding hover over drop down functionality found at [Stack Overflow](https://stackoverflow.com/questions/50116307/how-to-make-hover-effect-instead-of-click-in-bootstrap-4-dropdown-menu).
* The code for background picture using CSS was taken from [W3School](https://www.w3schools.com/howto/howto_css_full_page.asp).
* The code for the slide show page is written with the support of [w3School](https://www.w3schools.com/howto/howto_js_slideshow.asp).
* The pictures were taken by [Flavia Globe](https://www.instagram.com/flaviaglobe/?hl=en) during our travelling in Sri Lanka.
* The information on the locations' pages has been taken from [Wikipeadia](https://en.wikipedia.org/wiki/Main_Page).
* A special thanks for the support received by the tutoring team and my mentor.
