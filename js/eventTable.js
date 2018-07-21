"use strict";

/*
******************************************

eventTable.js and eventList.js

work together. LINK THE LIST FIRST.

******************************************
*/

//Set the date displayed in the calendar
const thisDay = new Date();

//Write the calender to the element with the id "calendar"
document.getElementById("calendarList").innerHTML = createCalendar(thisDay);

//Function to generate the calendar table
function createCalendar(calDate) {
   let calendarHTML  = "<table id='calendarTable'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

//Function to write the calendar caption
function calCaption(calDate) {
   //monthName array contains a list of month names
   const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   //Determines the current month
   let thisMonth = calDate.getMonth();

   //Determines the current year
   let thisYear = calDate.getFullYear();

   //Write the caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

//Function to write a table row of weekday abbreviations
function calWeekdayRow() {
   //Array of weekday abbreviations
   const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   let rowHTML = "<tr class='daysOfWeek'>";

   //Loop through the dayName array
   for (let i = 0; i < dayName.length; i++) {
      rowHTML += "<th class='weekDays' scope='col'>" + dayName[i] + "</th>";
   }
   rowHTML += "</tr>";
   return rowHTML;
}


//Function to calculate the number of days in the month
function daysInMonth(calDate) {
   //Array of days in each month
   const dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

   //Extract the four digit year and month value
   let thisYear = calDate.getFullYear();
   let thisMonth = calDate.getMonth();

   //revise the days in February for leap years
   if (thisYear % 4 === 0) {
      if ((thisYear % 100 !== 0) || (thisYear % 400 === 0)) {
         dayCount[1] = 29;
      }
   }

   //Return the number of the days for the current month
   return dayCount[thisMonth];
}

//Function to write table rows for each day of the month
function calDays(calDate) {
   //Determine the starting days of the month
   let day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   let weekDay = day.getDay();

   //Write blank cells preceding the starting day
   let htmlCode = "<tr >";
   for (let i = 0; i < weekDay; i++) {
      htmlCode += "<td class='day'></td>";
   }

   //Write the cells for each day of the month
   let totalDays = daysInMonth(calDate);

   let highlightDay = calDate.getDate();
   for (let i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();

      if (weekDay === 0) htmlCode += "<tr>";
      
      // Checks if highlightDay is today and if there are more than one event listed in eventList
      if (i === highlightDay && dayEvent[i] !== "" && dayEvent2[i] !== "") {
         
         // Concats the table data for today with up to 2 events
         htmlCode += "<td class='weekDates' id='today'><div class='date'>" + i + "</div> <div class='event'>" + dayEvent[i] + " <br />" + dayEvent2[i] + "</div></td>";

         // Checks if highlightDay is today and there is an event on dayEvent[i]
      } else if (i === highlightDay && dayEvent[i] !== "") {

         // Concats the table data for today with event tags and event info
         htmlCode += "<td class='weekDates' id='today'><div class='date'>" + i + "</div> <div class='event'>" + dayEvent[i] + "</td>";

         // Checks if there event on dayEvent[i] is an empty string
      } else if (i === highlightDay) {

         // Concats the table data for today with up to 2 events
         htmlCode += "<td class='weekDates' id='today'><div class='date'>" + i + "</div></td>";

      } else if (dayEvent[i] === "") {

         // Concats ONLY the table data and the date
         htmlCode += "<td class='weekDates'><div class='date'>" + i + "</div></td>";

         // Checks for a second event
      } else if (dayEvent2[i] !== "") {

         // Concats the table data for 2 events on any day but the today.
         htmlCode += "<td class='weekDates'><div class='date'>" + i + "</div> <div class='event'>" + dayEvent[i] + "</div> <div class='event'>" + dayEvent2[i] + "</div></td>";

      } else {
         // Concats table data for every day except today with a single event for the day
         htmlCode += "<td class='weekDates'><div class='date'>" + i + "</div> <div class='event'>" + dayEvent[i] + "</div></td>";

      }

      if (weekDay === 6) htmlCode += "</tr>";
   }
   return htmlCode;
}