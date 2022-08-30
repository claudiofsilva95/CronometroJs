let min = 0;
let sec = 0;
let hour = 0;
let watch = null;
let stopwatch = document.querySelector('#stopwatch')

const twoDigits = digit => {
    if (digit < 10){
        return `0${digit}`
    } else {
        return digit
    }
}

const start = document.querySelector('#start').addEventListener('click', () => {
    if(watch == null){
        watch = setInterval(timer, 1000);
    }
});

const pause = document.querySelector('#pause').addEventListener('click', () => {
    clearInterval(watch)
    watch = null;
})

const reset = document.querySelector('#reset').addEventListener('click', () => {
    clearInterval(watch)
    watch = null;
    sec = 0;
    min = 0;
    hour = 0;
    stopwatch.innerHTML = '00.00.00'
})


const timer = () => {
    if (sec == 60){
        sec = 0;
        min++;
    }
    if (min == 60){
        min = 0;
        hour++;
    }
    sec++;
    stopwatch.innerHTML = `${twoDigits(hour)}.${twoDigits(min)}.${twoDigits(sec)}`;
}


