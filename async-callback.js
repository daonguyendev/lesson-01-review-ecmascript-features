function printTime() {
    console.log("Each one second: " + new Date().toLocaleTimeString());
}

const intervalId = setInterval(printTime, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped after 10 seconds!"); 
}, 10000)