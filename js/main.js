'use strict';
var SiteName = 'Dragons Park';// Site Name

//The next 5 lines below changes the footer's copy right year whenever the year changes.
var today = new Date();
var year = today.getFullYear();
var footercontent= '<p>'+'&copy;'+year+' '+SiteName+'</p>';
var footer = document.getElementById('footnote'); 
    footer.innerHTML = footercontent;


//Availability: https://developers.google.com/maps/
function initMap() {
        var uluru = {lat:51.928146 , lng: -0.174659};
         
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

// Contact form validation starts here
var contactForm = document.getElementById("sMit");        // Get the submit button with an id of sMit
contactForm.onclick = function validateContactForm(){    // function to validate contact form input declared
//function's variables
var title = document.getElementById("sLect").value;
var firstName = document.getElementById("fname").value;
var lastName = document.getElementById("lname").value;
var address1 = document.getElementById("add1").value; 
var address1 = document.getElementById("add2").value;
var postCode = document.getElementById("postCode").value;
var email = document.getElementById("mail").value;
/* regex for email validation available at: https://www.codeproject.com/Questions/1176556/
How-to-do-email-validation-please-once-check-my-co */
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
//function's variables end here
  
if(title == "" ){                                             //Check if title was selected
var Title = document.getElementById("sLect"); 
document.getElementById("errormsg").innerHTML="Please select your title!";// Error message to display
Title.focus();                                                // Set focus
return false;
 }   
if(firstName == "" ){                                         //Check if first name is empty
var fname = document.getElementById("fname"); 
document.getElementById("errormsg").innerHTML="Please enter First Name!";// Error message to display
fname.focus();                                                // Set focus
return false;
 }            
if(lastName == "" ){                                          // Check if last name is empty 
var lname = document.getElementById("lname"); 
document.getElementById("errormsg").innerHTML="Please enter Last Name!"; // Error message to display
lname.focus();                                                // Set focus
return false;
 }        
if(address1 == "" ){                                         // Check if address1 is empty 
var add1 = document.getElementById("add1"); 
document.getElementById("errormsg").innerHTML="Your address is needed!";// Error message to display
add1.focus();                                                // Set focus
return false;
 }
if(postCode == "" ){                                         // Check if post code is empty
var pCode = document.getElementById("postCode"); 
document.getElementById("errormsg").innerHTML="Your post code is needed!";// Error message to display
pCode.focus();                                               // Set focus
return false;
 }
if(email == "") {                                            // Check Email address is empty
document.getElementById("errormsg").innerHTML="Email address cannot be empty!";// Error message to display
document.contactForm.email.focus() ;                         // Set focus
return false;
 }
if(!(email).match(mailformat)){                             //Check if email is in the right format  
document.getElementById("errormsg").innerHTML="Please enter a valid email address!"; // Error message to display
document.contactForm.email.focus() ;
return false;
 }    
else                                                         //if all checks are fine return true
 {
 newContact();	
 return true;                                          
 }
 };                                                          //function validate end here 
 
//https://www.lynda.com/JavaScript-tutorials/Working-onBlur-onFocus-events/81266/87545-4.html?autoplay=true#tab
var email = document.getElementById("mail"); 
email.onfocus = function(){
if(email.value == "Email address needed!"){
email.value = "";
  }
 };
email.onblur = function(){
if(email.value == ""){
email.value = "Email address needed!";
 }
};
//Contact form validation end here.

// This fuction displays special offers to contacts after a successful sign up.
function newContact(){
var firstName = document.getElementById("fname").value;	
var contactInfo = '<p>'+'Hello '+firstName+', you have Successfully joined our mailing list!'+'</p>';
var newinfo = document.getElementById("contactForm");
newinfo.innerHTML= contactInfo; 	
newinfo.className = 'contact';
$("#advert").load("advert.txt"); // loads file "advert.txt" using jQury Ajax  
var offer = document.getElementById("advert");
    offer.className = 'newoffers';// adds styles

}


 
