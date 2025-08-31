const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedTime = 0;
let isRuning = false;


function start() {
    if (!isRuning) {
        starttime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRuning = true;

    }

}

function stop() {
    if (isRuning) {
        clearInterval(timer);
        elapsedTime = Date.now() - starttime;
        isRuning = false;
    }


}

function restart() {
    clearInterval(timer);
    starttime = 0;
    elapsedTime = 0;
    isRuning = false;

    display.textContent = "00:00:00:00";


}
function update() {

    const currntTime = Date.now();
    elapsedTime = currntTime - starttime;

    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    hours=hours.toString().padStart(2,'0');
    minutes=minutes.toString().padStart(2,'0');
    seconds=seconds.toString().padStart(2,'0');
    milliseconds=milliseconds.toString().padStart(2,"0");


    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`

}