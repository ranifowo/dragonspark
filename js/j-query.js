'use strict';
$(document).ready(function(){ // When document is ready


$("a[rel*=help],a[rel*=modal2]").leanModal({ top : 30, overlay : 0.4,closeButton: ".modal_close"});

$("#speo").css({"color": "#030423","font-weight": "bold", "font-size": "1em",
"padding-top": "10px","padding-bottom": "10px"
});


$("#box3,#contus,#abt").load('advert.txt');// Loads special offers 
$("#abt").css({"background-color": "white"});// Adds white background to special offers on about us page.

$("#box3,#contus,#advert,#abt").hover(function(){ // Adds effect and styles to special offers
$("#bnow").show().css({"color": "red","font-weight": "bold", "font-size": "1em"}).fadeOut(2000);
});



$( "#sMit" ).on( "click", function() {
$("#box3").hover(function(){
$("#bnow").show().css({"color": "red","font-weight": "bold", "font-size": "1em"}).fadeOut(2000);
});
});



$('#sitehd').load('header.txt');// Loads page header


$('#iconholder').load('icons.txt'); // Icons on home page
$('#iconticket').load('iconsfour.txt')
                .css({"margin-top": "50px","padding-bottom": "50px"}); // Icons on page tickets.html
 

 





 
//Ticket
$("#AA").hide();

// if buy now is clicked
$('#buyT1,#buyT2,#buyT3,#buyT4').click(function(){ 
var clickedButton = $(this).attr('id'); // Store the id value of the cliked button in variable clickedButton
if(clickedButton == 'buyT1'){
var typeOfTicket = 'Day Ticket';
$("#BB,#ticketVip,#shortbreak,#annual").hide(500);
$("#AA,#ticketForm").show(500);
}
if(clickedButton == 'buyT2'){
var typeOfTicket = 'Vip Pass';
$("#BB,#ticketForm,#shortbreak,#annual").hide(500);
$("#AA,#ticketVip").show(500);
}
if(clickedButton == 'buyT3'){
var typeOfTicket = 'Short Break';
$("#BB,#ticketVip,#ticketForm,#annual").hide(500);
$("#AA,#shortbreak").show(500);
}
if(clickedButton == 'buyT4'){
var typeOfTicket = 'Annual Pass';
$("#BB,#shortbreak,#ticketVip,#ticketForm").hide(500);
$("#AA,#annual").show(500);
}
});


$("#px1").click(function(){
	$("#c").hide(500); 
    $("#d,#bpx1").show();//show div d and only picture #bpx1
    $("#bpx2,#bpx3,#bpx4,#bpx5,#bpx6,#bpx7,#bpx8,#bpx9").hide();// hide all other pictures    
});
$("#bpx1").click(function(){
	$("#d").hide(500); 
    $("#c").show();
    $("#px2,#px3,#px4,#px5,#px6,#px7,#px8,#px9").removeClass('pfocus');
     $("#px1").addClass('pfocus');
});
$("#px2").click(function(){
	$("#c").hide(500); 
    $("#d,#bpx2").show();
    $("#bpx1,#bpx3,#bpx4,#bpx5,#bpx6,#bpx7,#bpx8,#bpx9").hide();  
});
$("#bpx2").click(function(){
	$("#d").hide(500); 
    $("#c").show();
    $("#px1,#px3,#px4,#px5,#px6,#px7,#px8,#px9").removeClass('pfocus');
    $("#px2").addClass('pfocus'); 
});

$("#px3").click(function(){
	$("#c").hide(500); 
    $("#d,#bpx3").show();
    $("#bpx1,#bpx2,#bpx4,#bpx5,#bpx6,#bpx7,#bpx8,#bpx9").hide();  
});
$("#bpx3").click(function(){
	$("#d").hide(500); 
    $("#c").show();
    $("#px1,#px2,#px4,#px5,#px6,#px7,#px8,#px9").removeClass('pfocus');
    $("#px3").addClass('pfocus'); 
});

$("#px4").click(function(){
	$("#c").hide(500); 
    $("#d,#bpx4").show();
    $("#bpx1,#bpx2,#bpx3,#bpx5,#bpx6,#bpx7,#bpx8,#bpx9").hide();  
});
$("#bpx4").click(function(){
	$("#d").hide(500); 
    $("#c").show();
    $("#px1,#px2,#px3,#px5,#px6,#px7,#px8,#px9").removeClass('pfocus');
    $("#px4").addClass('pfocus'); 
});

$("#px5").click(function(){
	$("#c").hide(500); 
    $("#d,#bpx5").show();
    $("#bpx1,#bpx2,#bpx3,#bpx4,#bpx6,#bpx7,#bpx8,#bpx9").hide();  
});
$("#bpx5").click(function(){
	$("#d").hide(500); 
    $("#c").show();
    $("#px1,#px2,#px3,#px4,#px6,#px7,#px8,#px9").removeClass('pfocus');
    $("#px5").addClass('pfocus'); 
});

$("#px6").click(function(){
	$("#c").hide(500); 
    $("#d,#bpx6").show();
    $("#bpx1,#bpx2,#bpx3,#bpx4,#bpx5,#bpx7,#bpx8,#bpx9").hide();  
});
$("#bpx6").click(function(){
	$("#d").hide(500); 
    $("#c").show();
    $("#px1,#px2,#px3,#px4,#px5,#px7,#px8,#px9").removeClass('pfocus');
    $("#px6").addClass('pfocus'); 
});

$("#px7").click(function(){
	$("#c").hide(500); 
    $("#d,#bpx7").show();
    $("#bpx1,#bpx2,#bpx3,#bpx4,#bpx5,#bpx6,#bpx8,#bpx9").hide();  
});
$("#bpx7").click(function(){
	$("#d").hide(500); 
    $("#c").show();
    $("#px1,#px2,#px3,#px4,#px5,#px6,#px8,#px9").removeClass('pfocus');
    $("#px7").addClass('pfocus'); 
});

$("#px8").click(function(){
	$("#c").hide(500); 
    $("#d,#bpx8").show();
    $("#bpx1,#bpx2,#bpx3,#bpx4,#bpx5,#bpx6,#bpx7,#bpx9").hide();  
});
$("#bpx8").click(function(){
	$("#d").hide(500); 
    $("#c").show();
    $("#px1,#px2,#px3,#px4,#px5,#px6,#px7,#px9").removeClass('pfocus');
    $("#px8").addClass('pfocus'); 
});

$("#px9").click(function(){
	$("#c").hide(500); 
    $("#d,#bpx9").show();
    $("#bpx1,#bpx2,#bpx3,#bpx4,#bpx5,#bpx6,#bpx7,#bpx8").hide();  
});
$("#bpx9").click(function(){
	$("#d").hide(500); 
    $("#c").show();
    $("#px1,#px2,#px3,#px4,#px5,#px6,#px7,#px8").removeClass('pfocus');
    $("#px9").addClass('pfocus'); 
});
function startDate(dateStart){// This function gets and format the input from the date input field
  var dayDate = new Date(dateStart); 
  var curDay = dayDate.setHours(dayDate.getHours());
  var expiryDay =  new Date(curDay).toDateString();
  return expiryDay;
}

function expiryDate(dateStart){// This function sets expiry date for tickets
  var dayDate = new Date(dateStart); 
  var curDay = dayDate.setHours(dayDate.getHours() + 24);
  var expiryDay =  new Date(curDay).toDateString();
  return expiryDay;
 }


$('#ticketForm').on('submit', function(event){ //Submit ticketForm
   event.preventDefault();
   var elements = this.elements;
   var dayOne = elements.dateStart.value;
   var purchaseDay = new Date().toDateString();
   var expiryDay =  expiryDate(dayOne);
   var eventDate = startDate(dayOne);
   var people = elements.spinner.value;
   var ckbox = elements.upgrade.checked;
   var dayPrice = 15;
   var unitPrice = '£'+((dayPrice).toFixed(2));
   var amount = '£'+((people*dayPrice).toFixed(2));
   var discount = 0.50;
   if(ckbox){
   	var upgradeDiscount = (people*dayPrice)*discount;
   }else
   var upgradeDiscount = 0;
   var totalAmount = '£'+(((people*dayPrice)+upgradeDiscount)).toFixed(2);
   var day2fee = '£'+((upgradeDiscount).toFixed(2));
   
   var lengt = elements.paymth.length; 
   for (var i=0; i < lengt; i++) {// for loop for radio button
     if(elements.paymth[0].checked){
     	var paymth = elements.paymth[0].value;
     	break;
     }
   if(elements.paymth[1].checked){
     	var paymth = elements.paymth[1].value;
     	break;
     }  
    if(elements.paymth[2].checked){
     	var paymth = elements.paymth[2].value;
     	break;
     } 
 };//for loop end here
 
function reportTable (){// This function displays Day Ticket
 var report = '<div id="report">';
     report +='<table>';
     report +='<caption><h3>Dragons Park Ticket</h3></caption>';
     report +='<tr><th>Ticket Type:</th><td>Day Ticket</td><tr>';
     report +='<tr><th>Event Date:</th><td>'+eventDate+'</td><tr>';
     report +='<tr><th>Number of Guest(s):</th><td>'+people+'</td><tr>';
     report +='<tr><th>Price per Ticket:</th><td>'+unitPrice+'</td><tr>';
     report +='<tr><th>Cost of Ticket(s):</th><td>'+amount+'</td><tr>';
     report +='<tr><th>2nd Day fee:</th><td>'+day2fee+'</td><tr>';
     report +='<tr><th>Total Due:</th><td>'+totalAmount+'</td><tr>';
     report +='<tr><th>Paym. Method:</th><td>'+paymth+'</td><tr>';
     report +='<tr><th>Date of purchase:</th><td>'+purchaseDay+'</td><tr>';
     report +='<tr><th>Expiry Date:</th><td>'+expiryDay+'</td><tr>';
     report +='<tr><th><form><button  class="smllbutton" id="#cancelPay">Cancel</button></form></th><td><button  class="smllbutton" type="submit" > Pay Now!</button></td></tr>';
     report +='</table>';
     report +='</div>';
     return report;
 }   
document.getElementById('AA').innerHTML = reportTable();
});//Submit ticketForm end here





$('#ticketVip').on('submit', function(event){
   event.preventDefault();
   var elements = this.elements;
   var dayOne = elements.dateStart2.value;
   var purchaseDay = new Date().toDateString();
   var eventDate = startDate(dayOne);
   var expiryDay =  'Midnight '+expiryDate(dayOne);
   var pass = elements.spinner2.value;
   var costPerPass = 25;
   var displayCost = '£'+((costPerPass).toFixed(2));
    var totalAmount='£'+((costPerPass*pass).toFixed(2));
   var lengt = elements.paymth.length;
   for (var i=0; i < lengt; i++) {// for loop for radio button
     if(elements.paymth[0].checked){
     	var paymth = elements.paymth[0].value;
     	break;
     }
   if(elements.paymth[1].checked){
     	var paymth = elements.paymth[1].value;
     	break;
     }  
    if(elements.paymth[2].checked){
     	var paymth = elements.paymth[2].value;
     	break;
     } 
 };//for loop end here
  function reportTable (){// This function displays VIP Pass
 var report = '<div id="report">';
     report +='<table>';
     report +='<caption><h3>Dragons Park Ticket</h3></caption>';
     report +='<tr><th>Ticket Type:</th><td>VIP Pass</td><tr>';
     report +='<tr><th>Event Date:</th><td>'+eventDate+'</td><tr>';
     report +='<tr><th>Number of VIP Passes:</th><td>'+pass+'</td><tr>';
     report +='<tr><th>Price per Pass:</th><td>'+displayCost+'</td><tr>';
     report +='<tr><th>Total Due:</th><td>'+totalAmount+'</td><tr>';
     report +='<tr><th>Paym. Method:</th><td>'+paymth+'</td><tr>';
     report +='<tr><th>Valid Until:</th><td>'+expiryDay+'</td><tr>';
     report +='<tr><th><form><button  class="smllbutton" id="#cancelPay">Cancel</button></form></th><td><button  class="smllbutton" type="submit" > Pay Now!</button></td></tr>';
     report +='</table>';
     report +='</div>';
     return report;
 }  
   document.getElementById('AA').innerHTML = reportTable();
});

$('#shortbreak').on('submit', function(event){
   event.preventDefault();
   var elements = this.elements;
   var dayOne = elements.dateStart3.value; 
   var eventDate = startDate(dayOne);
   var lastDay = elements.endDate.value; 
   var endDate = startDate(lastDay);
  /*
  This comment refers to the next four lines of code below, which I have used to determine the number of days between two dates
  Availability: //https://www.codeproject.com/Questions/784416/calculate-diff-between-two-dates-using-Javascript
  */ 
   var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
   var firstDate = new Date(dayOne);
   var secondDate = new Date(lastDay);
   var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
           
   var adult = elements.adult.value;
   var children = elements.children.value;
   var people = Number(adult) + Number(children);    
   
  
   //Determine number of rooms needed based on number of guests
   if(people <= 4){
   	var rooms = 1;
   }
   if(people > 4 && people <=8){
   	var rooms = 2;
   }
   if(people > 8 && people <=12){
   	var rooms = 3;
   }
   if(people > 12 && people <=16){
   	var rooms = 4;
   }
   //Determine cost of rooms
   var roomPrice = 65.00;
   var roomAmount = Number(rooms)*roomPrice*diffDays;
   var roomCost = '£'+((roomAmount).toFixed(2));
   
   //Determine if theme park tickets should be included
   var dayTicket = elements.dayTicket.checked;
   if(dayTicket){
   	var dayPrice = 15;
   	var dayTicketAmount = dayPrice*people*diffDays;
   	var dayTicketCost = '£'+((dayTicketAmount).toFixed(2));
   	var note = 'Includes Theme Park Tickets';
   }
   if(!dayTicket){
   var note = ' ';
   var dayPrice = 0;
   var dayTicketAmount = 0;
   	var dayTicketCost = '£'+((dayTicketAmount).toFixed(2));
   }
    
    
   //Determine if 2nd day discount should be included.
   var ckbox = elements.day2.checked;
   if(ckbox){
   	var discount = 0.50;
   	var discounted = (people*dayPrice*diffDays)*discount;
   	var upgradeDiscount = '£'+((discounted).toFixed(2));
   	var day2Note = 'Includes 2nd Day discount';
   }
   if(!ckbox){
   var upgradeDiscount = 0.00;
   var day2Note = ' ';
   }
   
   
   //Determine if VIP passes should be included
    var vip = elements.vip.checked;
    if(vip){
    var passFee = 10.00;	
    var vipPay = passFee*people*diffDays;
    var vipPass = '£'+((vipPay).toFixed(2));
    
    var vipNote = 'Includes VIP Passes';	
    }
    if(!vip){
    var vipNote = ' ';	
    var vipPass = 0.00;	
    }	
    
    //Add up all short break costs
    var total = roomAmount+dayTicketAmount+discounted+vipPay;
    var totalCost = '£'+((total).toFixed(2));
   
   function reportTable (){// This function displays VIP Pass
    var report = '<div id="report">';
     report +='<table>';
     report +='<caption><h3>Short Break Ticket</h3></caption>';
     report +='<tr><th>Ticket Type:</th><td>Short Break</td><tr>';
     report +='<tr><th>Start Date:</th><td>'+eventDate+'</td><tr>';
     report +='<tr><th>End Date:</th><td>'+endDate+'</td><tr>';
     report +='<tr><th>Number of Days:</th><td>'+diffDays+'</td><tr>';
     report +='<tr><th>Number of Adults:</th><td>'+adult+'</td><tr>';
     report +='<tr><th>Number of Children:</th><td>'+children+'</td><tr>';
     report +='<tr><th>Number of Rooms:</th><td>'+rooms+'</td><tr>';
     report +='<tr><th>Cost of Room(s)/Day:</th><td>'+roomCost+'</td><tr>';
     
     report +='<tr><th>Theme Park Ticket:</th><td>'+dayTicketCost+'</td><tr>';
     report +='<tr><th>2nd Day fee:</th><td>'+upgradeDiscount+'</td><tr>';
     report +='<tr><th>VIP Pass:</th><td>'+vipPass+'</td><tr>';
     report +='<tr><th>Total Due:</th><td>'+totalCost+'</td><tr>';
      
     report +='</table>';
     report +='<table>';
     report +='<tr><div class="marker">'+note+'</div></tr>';
     report +='<tr><div class="marker">'+day2Note+'</div></tr>';
     report +='<tr><div class="marker">'+vipNote+'</div></tr>';
     report +='<tr><th><form><button  class="smllbutton" id="#cancelPay">Cancel</button></form></th><td><button  class="smllbutton" type="submit" > Pay Now!</button></td></tr>';
     report +='</table>';
     report +='</div>';
     return report;
 }  
  document.getElementById('AA').innerHTML = reportTable();  
});

$('#annual').on('submit', function(event){
   event.preventDefault();
   var elements = this.elements;
   var startDate = elements.dateStart4.value;
   var firstName = elements.fname.value;
   var lastName = elements.lname.value;
   var mobile = elements.mobile.value;
   var email = elements.mail.value;
   /*
  This comment refers to the next four lines of code below, which I have used to determine the annual pass expiry date
  Availability: https://stackoverflow.com/questions/2706125/javascript-function-to-add-x-months-to-a-date
  */ 
   var x = 12; //or whatever offset
   var CurrentDate = new Date();
   var expiry = CurrentDate.setMonth(CurrentDate.getMonth() + x);
   var expiryDate = new Date(expiry).toDateString();

   var report = '<div id="annualpass"><table><span>Dragons Park</span><h2>ANNUAL PASS</h2><p>Admits '+firstName+' Plus 4 Guests</p><p>Valid Until:'+expiryDate+'</p><h3>Total Due:£650:00</h3></table></div>';
       report +='<div id="passpay"><form><button  class="smllbutton" id="#cancelPay">Cancel</button> <button  class="smllbutton" type="submit" > Pay Now!</button></form></div>';
     
   document.getElementById('AA').innerHTML = report;
});



//cancel
$('#cancelDayTicket,#cancelVipTicket,#cancelSbreak,#cancelAnnual,#cancelPay').click(function(){      
    $("#AA").hide();  
    $("#BB").show();          
}); 

$(function() {
$( "#dateStart,#dateStart2,#dateStart3,#dateStart4" ).datepicker({ minDate:0})
                 .css({"text-align": "center"});
  });
$(function() {
 $( "#dateEnd" ).datepicker({ minDate:1})
                .css({"text-align": "center"});
  });

$( function() {
    $( "#accordion" ).accordion();               
  });	


 $('.bxslider').bxSlider({//Available: http://bxslider.com
  auto: true,
  autoControls: true
});


});// document ready function end here


