var re = /(?:\d{3})([-])\d{3}\1\d{4}/;


const startButton = document.getElementById("btnStart");
const stopButton = document.getElementById("btnStop");
const resetButton = document.getElementById("btnReset");
const timer = document.getElementById("timer");


let timerInterval;

startButton.addEventListener("click", function() {
    timerInterval = setInterval(function() {
        let getnow = new Date();
        timer.innerText = getnow.toLocaleTimeString();}, 1000);

});


stopButton.addEventListener("click", function() {
    clearInterval(timerInterval);
});


resetButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    timer.innerText = "00:00:00";
});





// phone number validation


const callButton = document.getElementById("btnCall");

callButton.addEventListener("click", function() {
    const phoneInput = document.querySelector("input[type='text']");
    testInfo(phoneInput.value);
});


function testInfo(phoneInput) {
    var OK = re.exec(phoneInput);
    if (OK)
        window.alert('Calling....... ');
    else if (phoneInput.length == 0)
        window.alert('Please enter a phone number');
    else
        window.alert(phoneInput + ' is not a valid phone number');
}  
