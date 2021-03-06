// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
    drawNumericDisplay: function(timerValue) {
        // Your Code Here
        const time = document.getElementById("numeric-display");
        time.innerHTML = timerValue;
        if (timerValue <= 10) {
            const newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
            time.style.color = "Red";
            time.style.fontSize = newSize + "em";
        }
    },
    drawProgressBars: function(timerValue) {
        // Your Code Here
        const bar = document.getElementsByClassName("progress-bar");
        for (var i = 0; i < bar.length; i++) {
            bar[i].style.width = (100 - timerValue) + "%";
        }
    },
    drawLitFuses: function(timerValue) {
        // Your Code Here
        let precent = timerValue / 100;
        const burnt = document.getElementsByClassName("burnt");
        const unburnt = document.getElementsByClassName("unburnt");
        for (var i = 0; i < burnt.length; i++) {
            unburnt[i].style.width = (precent * 98) + "%";
            burnt[i].style.width = ((1 - precent) * 98) + "%";
        }
    },
    drawCrawlers: function(timerValue) {
        // Your Code Here
        const time = 100 - timerValue;
        const bug = document.getElementsByClassName("crawler");
        for (var i = 0; i < bug.length; i++) {
            bug[i].style.marginLeft = (time * 10) + "px";
            if (timerValue % 2 === 0) {
                bug[i].style.marginTop = "0px";
            } else {
                bug[i].style.marginTop = "10px";
            }
        }
    }
};