//The calls for my functions go here
hourSlots();
addSaveEventListener()

//This function renders the time slots to the screen
function hourSlots() {
    var presentHour = moment().hour();

    //The for loop iterates through every hour of the day
    for (var i = 00; i < 24; i++) {

        //The below variables are being defined to be used within the function
        var div = $("<div>").addClass("time-block row");
        var textArea = $("<textarea>").addClass("textarea");
        var hour = $("<hour>").addClass("hour");

        // The below variables allow the stored text values to persist after page reload. Code inspired by instructor lesson.
        var key = `DailyPlanner: ${i}`
        var storageValue = localStorage.getItem(key);
        textArea.val(storageValue);

        //The save button & icon variables are being defined here 
        var button = $("<button>").addClass("saveBtn")
            .attr("data-time-slot", i);
        var saveIcon = $("<i>").addClass("far fa-save");
        button.append(saveIcon);

        //The following if / else if statements control the color of the timeslots based on the current hour of the day
        if (presentHour > i) {
            textArea.addClass("past");
        } else if (presentHour == i) {
            textArea.addClass("present");
        } else if (presentHour < i) {
            textArea.addClass("future");
        }

        //Lastly, the below code is responsible for appending/printing the textArea and button variables to the page
        div.append(textArea, button, hour);
        $(".container").append(div);
    }

    //Was thinking of using below code syntax to programatically specify each time slots hours, but could not get it to work. May use in a future version
    // for (let i = 00; i < 24; i++) {

    //   var div = $("<div>").addClass("time-block row");
    //   var textArea = $("<textarea>").addClass("textarea");
    //   var hour = $("<div>").addClass("hour");

    //   var displayHour = 0;
    //   var ampm = "";
    //   if (hour > 12) {
    //     displayHour = hour - 12;
    //     ampm = "pm";
    //   } else {
    //     displayHour = hour;
    //     ampm = "am";
    //   }
    // }
}

//The following function is responsible for adding an On Click event listener for the save button
function addSaveEventListener() {
    $(".saveBtn").click(function () {

        // The below variables set up the localStorage.setItem to act as expected and store text value to local storage. Code inspired by instructor lesson
        var timeSlot = $(this).attr("data-time-slot");
        var key = `DailyPlanner: ${timeSlot}`
        var value = $(this).siblings("textarea").val()

        //This code allows the on click event to store the value within the sibling text area
        localStorage.setItem(key, value);
    })
}

// This function allows for moment.js to display the current time in real-time
setInterval(function () {
    // Instantiate a moment object	
    var NowMoment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    // Display value of moment object in #displayMoment div	
    var eDisplayMoment = document.getElementById('displayMoment');
    eDisplayMoment.innerHTML = NowMoment;

}, 1000)();