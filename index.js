const timeEL = document.querySelector('.watch .time');
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let TotalSeconds = 0;
let interval = null;

function timer () {
	TotalSeconds++;

	let hours = Math.floor(TotalSeconds / 3600);
	let minutes = Math.floor((TotalSeconds - (hours * 3600)) / 60);
	let seconds = TotalSeconds % 60;

	if (seconds < 10) seconds = "0" + seconds;
	if (minutes < 10) minutes = "0" + minutes;
	if (hours < 10) hours = "0" + hours;

	timeEL.innerText = `${hours}:${minutes}:${seconds}`;
}

function Fstart () {
	if (interval) {
		return
	}
	interval = setInterval(timer, 1000);
}

function Fstop () {
	clearInterval(interval);
	interval = null;
}

function Freset () {
	Fstop();
	TotalSeconds = 0;
	timeEL.innerText = '00:00:00';
}

startButton.addEventListener("click", Fstart);
stopButton.addEventListener("click", Fstop);
resetButton.addEventListener("click", Freset);
