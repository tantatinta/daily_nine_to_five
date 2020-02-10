var timeBlock = $(".timeBlock");
var saveBtn = $(".saveBtn");
var calendarItem = $(".calendarItem");
var entries = [];
var storedEntries;


var timeChange = setInterval(function() {
    var currentDateAndTime = Date(Date.now());
    $("#currentDay").text(currentDateAndTime);
    }, 1000);
    
//checking timeblock vs current time
var currentHour = new Date().getHours();

for (var i = 0; i < calendarItem.length; i++) {
    // console.log(calendarItem[i].classList);
    var realtime = calendarItem[i].dataset.realtime;
    if (parseInt(realtime) === currentHour) {
        $(calendarItem[i]).addClass("present");
    }
    else if (parseInt(realtime) < currentHour) {
        $(calendarItem[i]).addClass("past");
    }
    else if (parseInt(realtime) > currentHour) {
        $(calendarItem[i]).addClass("future");
    }
}

saveBtn.on("click", function(event){
    event.preventDefault();
    var textInput = $(this.dataset.number);
    var tbId = $(this.dataset.number);

    var plannerEntry = {
        text: textInput.val().trim(),
        id: tbId.attr("id")
    }
    
    entries.push(plannerEntry);
    localStorage.setItem("plannerEntry", JSON.stringify(entries));

    // for (var k = 0; k < entries.length; k++){
    //     $().innerHTML.text = (entries[k].text);

    //     console.log();
    // }

    // newEntry = JSON.parse(localStorage.getItem("entries"));
    // var parsedText = newEntry.text;
    // var parsedId = newEntry.id;
    
})