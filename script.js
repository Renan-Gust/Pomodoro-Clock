var minutes = document.querySelector(".timer .minutes")
var seconds = document.querySelector(".timer .seconds")
var timer = document.querySelector(".timer .minutes p")

var breakLenght = document.querySelector("input#breakValue")
var sessionLenght = document.querySelector("input#sessionValue")

var clockMinutes;
var clockSeconds = 60 

function sessionValue() {
    let sessionLenght = document.querySelector("input#sessionValue").value
    timer.innerHTML = sessionLenght
    clockMinutes = sessionLenght

    clockSeconds = 60
}
/*
function breakValue() {
    let breakLenght = document.querySelector("input#breakValue").value    
     clockMinutes = breakLenght

     console.log(clockMinutes)
    
     clockSeconds = 60
}
*/
window.addEventListener("load", sessionValue)

var buttonStart = document.querySelector("#buttons button.start")
var buttonReset = document.querySelector("#buttons button.reset")
var buttonPause = document.querySelector("#buttons button.pause")
var time;

buttonStart.addEventListener("click", () => {
    time = setInterval(() => {
        clockSeconds--
        seconds.innerHTML = clockSeconds

        //Intervalo de tempo
        if(clockMinutes === 0 && clockSeconds === 0){        
            clearInterval(time)

            buttonPause.style.display = "inline"
            buttonStart.style.display = "none"

            setInterval(() => {
                let breakLenght = document.querySelector("input#breakValue").value

                minutes.innerHTML = breakLenght
                seconds.innerHTML = clockSeconds

                clockMinutes = breakLenght

                clockSeconds--
                seconds.innerHTML = clockSeconds    
                
                if(clockSeconds == 0){
                    clockSeconds = 60
                    clockMinutes--

                    minutes.innerHTML = clockMinutes
                    minutes = clockMinutes
                       
                }
            }, 100);
        }

        if(clockSeconds == 0){
            clockSeconds = 60
            clockMinutes--

            minutes.innerHTML = clockMinutes
        }
    }, 100);

    buttonPause.style.display = "inline"
    buttonStart.style.display = "none"
})

buttonPause.addEventListener("click", () => {
    clearInterval(time)

    buttonPause.style.display = "none"
    buttonStart.style.display = "inline"
})

buttonReset.addEventListener("click", () => {
    let sessionLenght = document.querySelector("input#sessionValue").value
    minutes.innerHTML = sessionLenght
    clockSeconds = 60

    minutes.innerHTML = sessionLenght
    seconds.innerHTML = "00"

    buttonPause.style.display = "none"
    buttonStart.style.display = "inline"

    clearInterval(time)
})

//Session Length
function addSessionValue() {
   sessionLenght.value++

    minutes.innerHTML = sessionLenght.value
    clockMinutes = sessionLenght.value
}

function decreaseSessionValue() {
    sessionLenght.value--

    minutes.innerHTML = sessionLenght.value
    clockMinutes = sessionLenght.value
}

//Break Length
function addBreakValue() {
    breakLenght.value++
}

function decreaseBreakValue() {
    breakLenght.value--
}