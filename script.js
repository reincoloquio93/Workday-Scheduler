var timeBlocks = $(".container");
var timeDisplay = moment().format('dddd, MMMM Do YYYY');

//creating the time in header 
var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);

var saveButton = document.querySelectorAll("button");

// arrays for timeblock 
var timeList = ["9 AM", "10 AM", "11 AM", "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM",];
var idTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17",];

// creating the 9-5pm timeblocks

for (var i = 0; i < timeList.length; i++) {
    var newRow = $("<div class='row time-block'>").attr("id", idTime[i]);
    var newDiv2 = $("<div class='hour col-1'>");
    var newDiv = $("<textarea class='col-10'>");
    var newButt = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    timeBlocks.append(newRow);

    newDiv2.text(timeList[i]);
    newRow.append(newDiv2);

    newDiv.text();
    newRow.append(newDiv);

    newButt.text();
    newRow.append(newButt);
}

// checks the time and the color codes of timeblocks 
function hourUpdater() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);


        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

hourUpdater();

var checkTime = setInterval(hourUpdater, 15000);

