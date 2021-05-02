var minutes = document.querySelector(".timer .minutes")
var seconds = document.querySelector(".timer .seconds")
var timer = document.querySelector(".timer .minutes p")

var breakLenght = document.querySelector("input#breakValue")
var sessionLenght = document.querySelector("input#sessionValue")

var clockMinutes;
var clockSeconds = 60

var buttonStart = document.querySelector("#buttons button.start")
var buttonReset = document.querySelector("#buttons button.reset")
var stopwatchSession;
var stopwatchBreak;

buttonStart.addEventListener("click", function startTimer() {
      clockMinutes = sessionLenght.value
      minutes.innerHTML = sessionLenght.value

     clockMinutes--
     minutes.innerHTML = clockMinutes

    stopwatchSession = setInterval(() => {
        clockSeconds--
        seconds.innerHTML = clockSeconds

        if(clockSeconds == 0){
            clockSeconds = 60
            clockMinutes--

            minutes.innerHTML = clockMinutes
        }

        //Stopwatch has arrived zero
        if(clockMinutes == -1){
            clearInterval(stopwatchSession)
            clockMinutes = 0
            minutes.innerHTML = clockMinutes

           sessionFinalized()
        }

    }, 1000);

    buttonStart.disabled = true
    buttonStart.classList.add("disabled")
})

buttonReset.addEventListener("click", function resetTimer () {
    let sessionLenght = document.querySelector("input#sessionValue").value
    minutes.innerHTML = sessionLenght
    clockSeconds = 60
    seconds.innerHTML = "00"
    
    clearInterval(stopwatchSession)
    clearInterval(stopwatchBreak)

    buttonStart.disabled = false
    buttonStart.classList.remove("disabled")
})

let audio = new Audio("notification.mp3")
function sessionFinalized() {
    audio.play()

    setTimeout(() => {
        startBreak()
        alert("Hora do descanso")
    }, 3000);
}

function breakFinalized() {
    audio.play()

    setTimeout(() => {
        alert("Descanso finalizado")
    }, 3000);

    minutes.innerHTML = sessionLenght.value

    buttonStart.disabled = false
    buttonStart.classList.remove("disabled")
}

function startBreak() {
    clockMinutes = breakLenght.value
    minutes.innerHTML = breakLenght.value

    clockMinutes--
    minutes.innerHTML = clockMinutes

    stopwatchBreak = setInterval(() => {
        clockSeconds--
        seconds.innerHTML = clockSeconds

        if(clockSeconds == 0){
            clockSeconds = 60
            clockMinutes--

            minutes.innerHTML = clockMinutes

            //Stopwatch has arrived zero
            if(clockMinutes == -1){
                clearInterval(stopwatchBreak)
                clockMinutes = 0
                minutes.innerHTML = clockMinutes

                breakFinalized()
            }
        }
    }, 1000);
}

//Add value in the session input
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

function AddSessionValuePerKey() {
    let sessionLenght = document.querySelector("input#sessionValue").value
    timer.innerHTML = sessionLenght
}

//Add value in the break input
function addBreakValue() {
    breakLenght.value++
}

function decreaseBreakValue() {
    breakLenght.value--
}

function AddBreakValuePerKey() {
    let breakLenght = document.querySelector("input#sessionValue").value
    timer.innerHTML = breakLenght
}