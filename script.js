var timeBlocks = $(".container");
var timeDisplay = moment().format('dddd, MMMM Do YYYY');

//creating the time in header 
var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);


// arrays for timeblock 
var timeList = ["9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",];
var idTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17",];

// creating the 9-5pm timeblocks

for (var i = 0; i < timeList.length; i++) {
    var newRow = $("<div class='row time-block'>").attr("id", idTime[i]);
    var newDiv2 = $("<div class='hour col-1'>");
    var newDiv = $("<textarea class='col-10'>");
    var newButt = $("<button type='button' data-id=" + idTime[i] + " class='saveBtn col-1 far fa-save'>");

    timeBlocks.append(newRow);

    newDiv2.text(timeList[i]);
    newRow.append(newDiv2);
    if (localStorage.getItem(idTime[i])) {

        newDiv.text(localStorage.getItem(idTime[i]))
    }
    else {
        newDiv.text();
    }
    newRow.append(newDiv);

    newButt.text();
    newRow.append(newButt);
}

// checks the time and this gives the appropriate color codes of timeblocks 
function hourUpdater() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);
        console.log(blockHour);

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future"); $()
        }
    });
}
var checkTime = setInterval(hourUpdater, 15000);
hourUpdater();

// getting the textare to save to local storage

$(document).on("click", ".saveBtn", function () {


    var id = $(this).attr("data-id");
    var text = $(this).prev().val()
    localStorage.setItem(id, text)

});