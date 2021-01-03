//CODE FOR SHOW/HIDE DROPDOWN NAVBAR from https://stackoverflow.com/questions/50116307/how-to-make-hover-effect-instead-of-click-in-bootstrap-4-dropdown-menu

$(document).ready(function(){
    $('.nav-link').hover(function() {
        $(this).trigger('click');},
             function() {    
    });
});





