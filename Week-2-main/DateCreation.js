//Assignment 1: Date Creation & Extraction (Beginner)
//---------------------------------------------------
//Tasks:
  //     1. Create a Date object for current date & time.
    //   2. Extract and display:
      //              * Year
        //            * Month (human readable)
          //          * Date
            //        * Day of week
              //      * Hours, minutes, seconds

 //     3. Display the date in this format:
   //                 DD-MM-YYYY HH:mm:ss

//Create a Date object
let date = new Date();
//Extract and display
const year= date.getFullYear();
//month
const monthNames =["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
const month = monthNames[date.getMonth()];
//Date
const date1= date.getDate();
//Day of week
const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = dayNames[date.getDay()];

//Hours,Minutes,Seconds
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

// Printing it
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);

// Date of the format
let formatted=date + "-" +month + "-" +year+ " " +hours+ ":" +minutes+ ":" +seconds;
console.log("Formatted :", formatted);