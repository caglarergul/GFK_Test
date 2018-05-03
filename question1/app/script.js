// Code goes here

$(document).ready(function() {
    for (var i = 1; i < 101; i++) {
        if ((i % 15) == 0) {
            $("div#numbers-container").append("BizzAppz" + ", ");
        } else if ((i % 3) == 0) {
            $("div#numbers-container").append("Bizz" + ", ");
        } else if ((i % 5) == 0) {
            $("div#numbers-container").append("Appz" + ", ");
        } else {
            $("div#numbers-container").append(i + ", ");
        }

    }
});