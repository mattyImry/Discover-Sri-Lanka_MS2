## **_Testing_**

### **_Automated testing_**

* HTML pages tested with [W3C HTML Validator](https://validator.w3.org/#validate_by_input).  
All pages had an error. After the copyright code `&#169` missing semicolon.  Added semicolon no issue.  
Gallery page had an error. After the arrows for changing picture code `&#10094` and `&#10095` missing semicolon. Added semicolon no issue.  
* CSS file has been tested with [W3C CSS validator](https://jigsaw.w3.org/css-validator/). No errors.

* JavaScript files has been tested with [Jshint](https://jshint.com/). No errors.

    The followings warning has been shown for email.js file:  

    One undefined variable  
7	emailjs  
One unused variable  
6	sendMail  


    The followings warning has been shown for gallery.js file: 

    One unused variable  
12	plusSlide  


    The followings warning has been shown for map.js file: 

    One warning  
44	Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (closeOtherInfo, infoObj)  
Four undefined variables  
8	google  
15	google  
28	google  
30	google  
34	google  
37	google  
65	google  
66	google  
72	google  
73	google  
95	google  
104	google  
113	google  
135	google  
25	i  
25	i  
25	i  
26	i  
26	i  
30	i  
30	i  
32	i  
33	i  
58	infoWindow  
66	infoWindow  
138	infoWindow  
65	places  
133	places  
One unused variable  
5	initMap  




* [LightHouse Google](https://developers.google.com/web/tools/lighthouse#devtools).  
I have tested the mobile and desktop versions of my project with Google Lighthouse.
Please refer to screen shots.  

    [mobile](assets/media/lighthouse_mobile.JPG) Screenshot

    I have noticed a slow performance for the mobile view. After investigating the issue I have noticed that for around 700ms there is no response and the page stays blank. On Lighthouse when looking at the performance tab you can see that the timeline referred to the blank frames, mentions "https://mattyimry.github.io/Discover-Sri-Lanka_MS2/". I do think that the performance issue comes from the loading time from "Github".
    [desktop](assets/media/lighthouse_desktop.JPG) Screenshot




### **_Manual testing_**

#### **_Home page_**

Expected - Google Map to load correctly when user loads page https://mattyimry.github.io/Discover-Sri-Lanka_MS2/  
Testing - Opening https://mattyimry.github.io/Discover-Sri-Lanka_MS2/  
Result - Google Map loads correctly with custom markers, correct location (Sri Lanka), correct zoom and controls. All Google map controls on the map are working as expected.    

Expected - Google Map search box to return items that Users searched for.  
Testing - Entered "Hotel" in search box.  
Result - Google Map return markers on map for hotels.  
Testing - Entered "Restaurant" in search box.   
Result - Google Map return markers on map for restaurants.  

Expected - User search facilities in search box. Clicking on Google searched marker. An info window opens with information for the facility searched, clickable links and icon.   
Testing - Clicked searched marker, info window opens with correct facility's information and clickable link.   
Testing - Clickable links open the Google map page for the facility searched.  
Result - Info window and clickable link working as expected.

Expected - Clicking on Mirissa custom marker. An info window opens with information for Mirissa and clickable link.    
Testing - Clicked custom marker Mirissa info window opens with correct location's information and clickable link.   
Testing - Clickable link opens the Mirissa page. Same page available in drop down menu present in navbar.  
Result - Info window and clickable link working as expected.

Expected - Clicking on Nilaveli custom marker. An info window opens with information for Nilaveli and clickable link.  
Testing - Clicked custom marker Nilaveli info window opens with correct location's information and clickable link.   
Testing - Clickable link opens the Nilaveli page. Same page available in drop down menu present in navbar.  
Result - Info window and clickable link working as expected.

Expected - Clicking on Anuradhapura custom marker. An info window opens with information for Anuradhapura and clickable link.  
Testing - Clicked custom marker Anuradhapura info window opens with correct location's information and clickable link.  
Testing - Clickable link opens the Anuradhapura page. Same page available in drop down menu present in navbar.  
Result - Info window and clickable link working as expected.

Expected - Clicking on Polonnaruwa custom marker. An info window opens with information for Polonnaruwa and clickable link.  
Testing - Clicked custom marker Polonnaruwa info window opens with correct location's information and clickable link.  
Testing - Clickable link opens the Polonnaruwa page. Same page available in drop down menu present in navbar.  
Result - Info window and clickable link working as expected.  

Expected - Clicking on Ella custom marker. An info window opens with information for Ella and clickable link.  
Testing - Clicked custom marker Ella info window opens with correct location's information and clickable link. 
Testing - Clickable link opens the Ella page. Same page available in drop down menu present in navbar.  
Result - Info window and clickable link working as expected.
   
Expected - Reset button reset map returning to its default zoom state.  
Testing - Zoomed in on map, clicked reset button.  
Result - Reset button works as expected maps back to initial zoom state.  


#### **_Navbar_**

Expected - When mouse hovering over drop down menus, the lists of locations are shown.  
Testing - Mouse hovering over drop down menus.  
Result - The drop down menus lists are shown as expected.  

Expected - Link in navbar to open Home page.  
Testing - Clicked on "Home".  
Result - Home link in navbar opens Home page as expected.  


Expected - Links in navbar to open Mirissa page.    
Testing - Clicking on "Mirissa".    
Result - Mirissa link in navbar opens Mirissa page as expected.  

Expected - Links in navbar to open Nilaveli page.    
Testing - Clicking on "Nilaveli".    
Result - Nilaveli link in navbar opens Nilaveli page as expected.  

Expected - Links in navbar to open Anuradhapura page.    
Testing - Clicking on "Anuradhapura" .    
Result - Anuradhapura link in navbar opens Anuradhapura page as expected.

Expected - Links in navbar to open Polonnaruwa page.    
Testing - Clicking on "Polonnaruwa".    
Result - Polonnaruwa link in navbar opens Polonnaruwa page as expected.

Expected - Links in navbar to open Ella page.    
Testing - Clicking on "Ella".      
Result - Ella link in navbar opens Ella page as expected.

Expected - Link in navbar to open Gallery page.  
Testing - Clicked on "Gallery".    
Result - Gallery link in navbar opens Gallery page as expected.  

Expected - Link in navbar to open Contact page.  
Testing - Clicked on "Contact".    
Result - Contact link in navbar opens Contact page as expected.


#### **_Mirissa page_**

Expected - Link "Booking.com" to open Booking.com page for Mirissa in a new window.  
Testing - Clicked "Booking.com"  
Result - New window opens as expected.  

Expected - Link "Airbnb" to open Airbnb.co.uk page for Mirissa in a new window.  
Testing - Clicked "Airbnb"  
Result - New window opens as expected.  

Expected - Link "Trip Advisor" to open Tripadvisor.co.uk page for Mirissa in a new window.  
Testing - Clicked "Trip Advisor"  
Result - New window opens as expected.  

Expected - When mouse hovering over drop down menus, the lists of locations are shown.  
Testing - Mouse hovering over drop down menus.  
Result - The drop down menus lists are shown as expected.  

Expected - Link in navbar to open Home page.  
Testing - Clicked on "Home".  
Result - Home link in navbar opens Home page as expected.  
 

Expected - Links in navbar to open Nilaveli page.    
Testing - Clicking on "Nilaveli".    
Result - Nilaveli link in navbar opens Nilaveli page as expected.  

Expected - Links in navbar to open Anuradhapura page.    
Testing - Clicking on "Anuradhapura" .    
Result - Anuradhapura link in navbar opens Anuradhapura page as expected.

Expected - Links in navbar to open Polonnaruwa page.    
Testing - Clicking on "Polonnaruwa".    
Result - Polonnaruwa link in navbar opens Polonnaruwa page as expected.

Expected - Links in navbar to open Ella page.    
Testing - Clicking on "Ella".      
Result - Ella link in navbar opens Ella page as expected.

Expected - Link in navbar to open Gallery page.  
Testing - Clicked on "Gallery".    
Result - Gallery link in navbar opens Gallery page as expected.  

Expected - Link in navbar to open Contact page.  
Testing - Clicked on "Contact".    
Result - Contact link in navbar opens Contact page as expected.


#### **_Nilaveli page_**

Expected - Link "Booking.com" to open Booking.com page for Nilaveli in a new window.  
Testing - Clicked "Booking.com"  
Result - New window opens as expected.  

Expected - Link "Airbnb" to open Airbnb.co.uk page for Nilaveli in a new window.  
Testing - Clicked "Airbnb"  
Result - New window opens as expected.  

Expected - Link "Trip Advisor" to open Tripadvisor.co.uk page for Nilaveli in a new window.  
Testing - Clicked "Trip Advisor"  
Result - New window opens as expected.  

Expected - When mouse hovering over drop down menus, the lists of locations are shown.  
Testing - Mouse hovering over drop down menus.  
Result - The drop down menus lists are shown as expected.  

Expected - Link in navbar to open Home page.  
Testing - Clicked on "Home".  
Result - Home link in navbar opens Home page as expected.  

Expected - Links in navbar to open Mirissa page.    
Testing - Clicking on "Mirissa".    
Result - Mirissa link in navbar opens Mirissa page as expected.  


Expected - Links in navbar to open Anuradhapura page.    
Testing - Clicking on "Anuradhapura" .    
Result - Anuradhapura link in navbar opens Anuradhapura page as expected.

Expected - Links in navbar to open Polonnaruwa page.    
Testing - Clicking on "Polonnaruwa".    
Result - Polonnaruwa link in navbar opens Polonnaruwa page as expected.

Expected - Links in navbar to open Ella page.    
Testing - Clicking on "Ella".      
Result - Ella link in navbar opens Ella page as expected.

Expected - Link in navbar to open Gallery page.  
Testing - Clicked on "Gallery".    
Result - Gallery link in navbar opens Gallery page as expected.  

Expected - Link in navbar to open Contact page.  
Testing - Clicked on "Contact".    
Result - Contact link in navbar opens Contact page as expected.

#### **_Anuradhapura page_**

Expected - Link "Booking.com" to open Booking.com page for Anuradhapura in a new window.  
Testing - Clicked "Booking.com"  
Result - New window opens as expected.  

Expected - Link "Airbnb" to open Airbnb.co.uk page for Anuradhapura in a new window.  
Testing - Clicked "Airbnb"  
Result - New window opens as expected.  

Expected - Link "Trip Advisor" to open Tripadvisor.co.uk page for Anuradhapura in a new window.  
Testing - Clicked "Trip Advisor"  
Result - New window opens as expected.  

Expected - When mouse hovering over drop down menus, the lists of locations are shown.  
Testing - Mouse hovering over drop down menus.  
Result - The drop down menus lists are shown as expected.  

Expected - Link in navbar to open Home page.  
Testing - Clicked on "Home".  
Result - Home link in navbar opens Home page as expected.  

Expected - Links in navbar to open Mirissa page.    
Testing - Clicking on "Mirissa".    
Result - Mirissa link in navbar opens Mirissa page as expected.  


Expected - Links in navbar to open Polonnaruwa page.    
Testing - Clicking on "Polonnaruwa".    
Result - Polonnaruwa link in navbar opens Polonnaruwa page as expected.

Expected - Links in navbar to open Ella page.    
Testing - Clicking on "Ella".      
Result - Ella link in navbar opens Ella page as expected.

Expected - Link in navbar to open Gallery page.  
Testing - Clicked on "Gallery".    
Result - Gallery link in navbar opens Gallery page as expected.  

Expected - Link in navbar to open Contact page.  
Testing - Clicked on "Contact".    
Result - Contact link in navbar opens Contact page as expected.


#### **_Polonnaruwa page_**

Expected - Link "Booking.com" to open Booking.com page for Polonnaruwa in a new window.  
Testing - Clicked "Booking.com"  
Result - New window opens as expected.  

Expected - Link "Airbnb" to open Airbnb.co.uk page for Polonnaruwa in a new window.  
Testing - Clicked "Airbnb"  
Result - New window opens as expected.  

Expected - Link "Trip Advisor" to open Tripadvisor.co.uk page for Polonnaruwa in a new window.  
Testing - Clicked "Trip Advisor"  
Result - New window opens as expected.  

Expected - When mouse hovering over drop down menus, the lists of locations are shown.  
Testing - Mouse hovering over drop down menus.  
Result - The drop down menus lists are shown as expected.  

Expected - Link in navbar to open Home page.  
Testing - Clicked on "Home".  
Result - Home link in navbar opens Home page as expected.  

Expected - Links in navbar to open Mirissa page.    
Testing - Clicking on "Mirissa".    
Result - Mirissa link in navbar opens Mirissa page as expected.  

Expected - Links in navbar to open Nilaveli page.    
Testing - Clicking on "Nilaveli".    
Result - Nilaveli link in navbar opens Nilaveli page as expected.  

Expected - Links in navbar to open Anuradhapura page.    
Testing - Clicking on "Anuradhapura" .    
Result - Anuradhapura link in navbar opens Anuradhapura page as expected.

Expected - Links in navbar to open Ella page.    
Testing - Clicking on "Ella".      
Result - Ella link in navbar opens Ella page as expected.

Expected - Link in navbar to open Gallery page.  
Testing - Clicked on "Gallery".    
Result - Gallery link in navbar opens Gallery page as expected.  

Expected - Link in navbar to open Contact page.  
Testing - Clicked on "Contact".    
Result - Contact link in navbar opens Contact page as expected.


#### **_Ella page_**

Expected - Link "Booking.com" to open Booking.com page for Ella in a new window.  
Testing - Clicked "Booking.com"  
Result - New window opens as expected.  

Expected - Link "Airbnb" to open Airbnb.co.uk page for Ella in a new window.  
Testing - Clicked "Airbnb"  
Result - New window opens as expected.  

Expected - Link "Trip Advisor" to open Tripadvisor.co.uk page for Ella in a new window.  
Testing - Clicked "Trip Advisor"  
Result - New window opens as expected.  

Expected - When mouse hovering over drop down menus, the lists of locations are shown.  
Testing - Mouse hovering over drop down menus.  
Result - The drop down menus lists are shown as expected.  

Expected - Link in navbar to open Home page.  
Testing - Clicked on "Home".  
Result - Home link in navbar opens Home page as expected.  

Expected - Links in navbar to open Mirissa page.    
Testing - Clicking on "Mirissa".    
Result - Mirissa link in navbar opens Mirissa page as expected.  

Expected - Links in navbar to open Nilaveli page.    
Testing - Clicking on "Nilaveli".    
Result - Nilaveli link in navbar opens Nilaveli page as expected.  

Expected - Links in navbar to open Anuradhapura page.    
Testing - Clicking on "Anuradhapura" .    
Result - Anuradhapura link in navbar opens Anuradhapura page as expected.

Expected - Links in navbar to open Polonnaruwa page.    
Testing - Clicking on "Polonnaruwa".    
Result - Polonnaruwa link in navbar opens Polonnaruwa page as expected.


Expected - Link in navbar to open Gallery page.  
Testing - Clicked on "Gallery".    
Result - Gallery link in navbar opens Gallery page as expected.  

Expected - Link in navbar to open Contact page.  
Testing - Clicked on "Contact".    
Result - Contact link in navbar opens Contact page as expected.


#### **_Gallery page_**

Expected - "Next >" white arrow to show next picture.  
Testing - Clicked "Next >"  
Result - Next picture shown as expected.  

Expected - "Previous <" white arrow to go back to previous picture.  
Testing - Clicked "Previous <".  
Result - Previous picture shown as expected.  

Expected - When mouse hovering over drop down menus, the lists of locations are shown.  
Testing - Mouse hovering over drop down menus.  
Result - The drop down menus lists are shown as expected.  

Expected - Link in navbar to open Home page.  
Testing - Clicked on "Home".  
Result - Home link in navbar opens Home page as expected.  

Expected - Links in navbar to open Mirissa page.    
Testing - Clicking on "Mirissa".    
Result - Mirissa link in navbar opens Mirissa page as expected.  

Expected - Links in navbar to open Nilaveli page.    
Testing - Clicking on "Nilaveli".    
Result - Nilaveli link in navbar opens Nilaveli page as expected.  

Expected - Links in navbar to open Anuradhapura page.    
Testing - Clicking on "Anuradhapura" .    
Result - Anuradhapura link in navbar opens Anuradhapura page as expected.

Expected - Links in navbar to open Polonnaruwa page.    
Testing - Clicking on "Polonnaruwa".    
Result - Polonnaruwa link in navbar opens Polonnaruwa page as expected.

Expected - Links in navbar to open Ella page.    
Testing - Clicking on "Ella".      
Result - Ella link in navbar opens Ella page as expected.

Expected - Link in navbar to open Contact page.  
Testing - Clicked on "Contact".    
Result - Contact link in navbar opens Contact page as expected.



#### **_Contact us page_**

Expected - User do not fill "Name" section.  
Testing - "Name" section not filled in.    
Result - Error appears on "Name" section saying "Please fill in this field".  

Expected - User do not fill "E-mail" section.  
Testing - "E-mail" section not filled in.  
Result - Error appears on "Email" section saying "Please include an "@" in the email address".  


Expected - User do not fill "Subject" section.  
Testing - "Subject" section not filled in.  
Result - Error appearss on "Subject" section saying "Please fill in this field".  

Expected - User do not fill "Message" section.  
Testing - "Message" section not filled in.  
Result - Error appears on "Subject" section saying "Please fill in this field". 

Expected - User click on "Submit" button after filling the form correctly.  
Testing - Filling form correctly and click "Submit".  
Result - Message alert appears "Thank you your message was sent".  

Expected - User completes the form correctly.  
Testing - Form filled in correctly.  
Result - Message alert appears "Thank you your message was sent"  


Expected - To receive an email to developer email account when users fill in the form correctly. EmailJs functionality    
Testing - Form filled in correctly.  
Result - Message alert appears "Thank you your message was sent". Email received to developer account with the same information written inside form sections.  

Expected - When mouse hovering over drop down menus, the lists of locations are shown.  
Testing - Mouse hovering over drop down menus.  
Result - The drop down menus lists are shown as expected.  

Expected - Link in navbar to open Home page.  
Testing - Clicked on "Home".  
Result - Home link in navbar opens Home page as expected.  

Expected - Links in navbar to open Mirissa page.    
Testing - Clicking on "Mirissa".    
Result - Mirissa link in navbar opens Mirissa page as expected.  

Expected - Links in navbar to open Nilaveli page.    
Testing - Clicking on "Nilaveli".    
Result - Nilaveli link in navbar opens Nilaveli page as expected.  

Expected - Links in navbar to open Anuradhapura page.    
Testing - Clicking on "Anuradhapura" .    
Result - Anuradhapura link in navbar opens Anuradhapura page as expected.

Expected - Links in navbar to open Polonnaruwa page.    
Testing - Clicking on "Polonnaruwa".    
Result - Polonnaruwa link in navbar opens Polonnaruwa page as expected.

Expected - Links in navbar to open Ella page.    
Testing - Clicking on "Ella".      
Result - Ella link in navbar opens Ella page as expected.

Expected - Link in navbar to open Gallery page.  
Testing - Clicked on "Gallery".    
Result - Gallery link in navbar opens Gallery page as expected.  



### **_User Story testing_**  


Expected - As a tourist I want to be able to discover where is the geographical location of Sri Lanka and where the locations stated in the website are located.  
Testing - Opening https://mattyimry.github.io/Discover-Sri-Lanka_MS2/  
Result - Google Map loads correctly with custom markers, correct location (Sri Lanka).   


Expected - As a tourist I want to be able to gather more information about Sri Lanka locations present in the map by using the links in the navbar.  
Testing - Opening links inside navbar.    
Result - The links open location's pages.   

Expected - As a tourist I want to be able to, by using the search box in the map, to search for facilities, places to visit, find addresses.  
Testing - Entered "Hotel" in search box.  
Result - Google Map return markers on map for hotels with info window with related icon and address.    
Testing - Entered "Restaurant" in search box.   
Result - Google Map return markers on map for restaurant with info window with related icon and address.    
Testing - A different number of facilities and places has been searched for.
Result - All searches have returned the informations correctly.  

Expected - As a tourist I want to be able to use a contact form in case more information are needed.
Testing - Form filled in correctly.  
Result - Message alert appear "Thank you your message was sent". Email received to developer account with the same informations written inside form sections.  

Expected - As a tourist I want to be able to view pictures of Sri Lanka.  
Testing - Click gallery page and click next/previous white arrow.  
Result - Pictures are changing as expected.  


Expected - As a local resident I want to be able to find more informations about locations in Sri Lanka via links in the navbar.  
Testing - Opening links inside navbar. 
Result - The links open location's pages. 


Expected - As a local resident I want to be able to, by using the search box in the map, search for  facilities and places to visit, find addresses.  
Testing - Entered "Hotel" in search box.  
Result - Google Map return markers on map for hotels with info window with related icon and address.    
Testing - Entered "Restaurant" in search box.   
Result - Google Map return markers on map for restaurant with info window with related icon and address.    
Testing - A different number of facilities and places has been searched for.
Result - All searches have returned the informations correctly.  

Expected - As a local resident I want to be able to view pictures of Sri Lanka.  
Testing - Click gallery page and click next/previous white arrow.  
Result - Pictures are changing as expected.  


### **_Strategy /Site owner testing_**  


Expected - I have designed this website to help the User explore different Sri Lankan locations.  
Testing - Click links in navbar.  
Result - Links in navbar open pages for Sri Lanka's locations.  


Expected - The User can view the locations on Google maps, use a search box in Google maps to search for facilities and other locations within the island or the world.  
Testing - Load Home page or load https://mattyimry.github.io/Discover-Sri-Lanka_MS2/  
Result - The maps loads correctly. Search box fully functional. All searches returns correct information and markers on map.    

Expected - Use external links to check blogs and to be able to book accomodation.  
Testing - Click on links at bottom of location's pages.  
Result - All links redirect the user to external link.  

Expected - The User can use the contact form in the contact page to request more information about Sri Lanka.  
Testing - Filled contact form correctly.  
Result - The developer receives an email with the same information entered in the form.  

Expected - The  local resident/tourist can view pictures of Sri Lanka.  
Testing - Click gallery page and click next/previous white arrow.  
Result - Pictures are changing as expected.  

### **_Browser compatibility_**
  
The project ahd been tested in the following browsers without any compatibility issue:  
* Google Chrome    
* Microsoft Edge  
* Firefox  
* Opera  

The project has also been tested on different screen sizes. 15" and 14" inch laptop, 24" screen and 20" screen.


Please refer to this link [screenshot desktop](/workspace/Discover-Sri-Lanka_MS2/assets/media/desktop_view_screenshots.pdf) to view the screenshots of the project in desktop view.


### **_Responsiveness_**

As already specified in the "Surface" part in README file, the project has been developed with mobile first approach.
Please refer to this link [screenshot mobile](/workspace/Discover-Sri-Lanka_MS2/assets/media/mobile_view_screenshots.pdf) to view the screenshots of the project in mobile view.

The project has been tested in mobile view in the following devices without any compatibility issue: 

* Motorola G5, G8 and G9
* Iphone 6
* Ipad 2
