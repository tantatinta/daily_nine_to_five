var timeBlock = $(".timeBlock");
var saveBtn = $(".saveBtn");
var calendarItem = $(".calendarItem");
// var entries = [];
// var storedEntries;


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
    var tbId = this.dataset.number; //we want this to grab the id with the hashtag

    var plannerEntry = {
        text: textInput.val().trim(),
        id: tbId
    }
//we're checking that there is nothing inside the storage
//we tell it to get our entry or an empty item. THEN we save our entries in array and local storage
    var storedEntries = JSON.parse(localStorage.getItem("plannerEntry") || "[]")
    
    storedEntries.push(plannerEntry);
    localStorage.setItem("plannerEntry", JSON.stringify(storedEntries));       
})
//we retrieve our locl storage values and save them into an array
 var parsedEntries = JSON.parse(localStorage.getItem("plannerEntry") || "[]");

 //that looks like this
//  parsedEntries = [
//     {
//         text: value,
//         id: value
//     },
//     {
//         text: value,
//         id: value
//     }
//  ]
// this is how we access our items
//  parsedEntries[0].text
//  parsedEntries[1].id
// create for loop to select the textbox with the id value and replace its text with the text that corresponds to the same id number
for (var m = 0; m < parsedEntries.length; m++) {
$(parsedEntries[m].id).val(parsedEntries[m].text)
}