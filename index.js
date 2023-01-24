const timeEL = document.getElementById("time");

let TotalSeconds = 0;
let interval = null;

function timer () {
	TotalSeconds++;

	let hours = Math.floor(TotalSeconds / 3600);
	let minutes = Math.floor((TotalSeconds - (hours * 3600)) / 60);
	let seconds = TotalSeconds % 60;

	seconds = seconds < 10 ?  "0" + seconds: seconds;
	minutes = minutes < 10 ?  "0" + minutes: minutes;
	hours = hours < 10 ? "0" + hours: hours;

	timeEL.innerText = `${hours}:${minutes}:${seconds}`;
}

function start () {
	if (interval) {
		return
	}
	else {
		interval = setInterval(timer, 1000);
	}
}

function stop () {
	clearInterval(interval);
	interval = null;
}

function reset () {
	stop();
	TotalSeconds = 0;
	timeEL.innerText = '00:00:00';
}
