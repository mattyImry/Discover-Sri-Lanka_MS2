// CODE WAS WRITTEN BY FOLLOWING COURSE MATERIAL AND DOCUMENTATION FROM EMAIL.JS WEBSITE.

function sendMail(contactForm) {
    emailjs.send("sri_lanka_prj", "template_srilanka",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "more_info": contactForm.message.value,
        
    })
    .then(alert(`Thank you! Your message was sent`));
        /*function(response) {
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error)
        });
        return false;*/

}

