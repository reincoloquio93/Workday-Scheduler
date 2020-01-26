//creating the time in header 
var timeBlocks = $(".container");
var timeDisplay = moment().format('dddd, MMMM Do YYYY');

var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);

// arrays for timeblock 
var timeList = ["9 AM", "10 AM", "11 AM", "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM",]
var idTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17",] 