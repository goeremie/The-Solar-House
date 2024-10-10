/* global setInterval, clearInterval, document*/
var countDownDate = new Date().getTime() + 600000; // 10 minutes from now

        // Update the countdown every 1 second
var x = setInterval(function () {
    "use strict";
    var now = new Date().getTime(), distance = countDownDate - now, minutes = Math.floor(distance / (1000 * 60)), seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "Available For: " + minutes + "m " + seconds + "s ";

            // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);