var tasks = {};
// Display the date
var today = function() {
    var currentDay = document.querySelector("#currentDay");
    currentDay.textContent = moment().format("dddd, MMMM Do");
};
today();

var auditTask = function() {
   var time = moment().format("h a");
   notPresent(time);
   if (time === "9 am") {
        $("#9AM").addClass("present");
   }
   else if (time === "10 am") {
        $("#10AM").addClass("present");
   }
   else if (time === "11 am") {
        $("#11AM").addClass("present");
   }
   else if (time === "12 pm") {
        $("#12PM").addClass("present");
   }
   else if (time === "1 pm") {
        $("#1PM").addClass("present");
   }
   else if (time === "2 pm") {
        $("#2PM").addClass("present");
   }
   else if (time === "3 pm") {
        $("#3PM").addClass("present");
   }
   else if (time === "4 pm") {
        $("#4PM").addClass("present");
   }
   else if (time === "5 pm") {
        $("#5PM").addClass("present");
   }

   else {
        $(".col-10").addClass("past");
   }
   
};
var notPresent = function(notTime) {
    if (moment().isAfter(notTime)) {
        $(".col-10").addClass("past");
    }
    else if (Math.abs(moment().diff(notTime, "hours")) <= 1) {
        $(".col-10").addClass("future");
    }
    else {
        console.log("Something wrong");
    }
};
auditTask();

var loadTasks = function() {
   tasks = JSON.parse(localStorage.getItem("tasks"));
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

$(".saveBtn").on("click", "i", function() {
    

   saveTasks();
});

loadTasks();

setInterval(function() {
    $(".col-10").each(function(index, el) {
        auditTask(el);
   });
   
}, (1000 * 60) * 60);