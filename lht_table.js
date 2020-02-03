"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Beckham Le
   Date:   2/3/20

	
*/
//stores this date in the thisDay variable
var thisDay = new Date("August 30, 2018");

//stores the html code to making the table in the tableHTML variable 
var tableHTML = "<table id='eventTable'>" + "<caption>Upcoming Events</caption>" + "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

//sets the endDate to the variable thisDay after 14 days
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

//creates table rows with table data boxes with the event, description, and prices until it has gone through the whole eventDates array 
for(var i=0; i<eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();

   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr>" + "<td>" + eventDay + " " + eventTime + "</td>" + "<td>" + eventDescriptions[i] + "</td>" + "<td>" + eventPrices[i] + "</td>" + "</tr>"
   }
}

tableHTML += "</table>"

//inserts all of the html code from the tableHTML variable into the div element with the id "eventList"
document.getElementById("eventList").innerHTML = tableHTML;