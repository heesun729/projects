let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const appendTens = document.getElementById('ms');
const appendSeconds = document.getElementById('ss');
const appendMinutes = document.getElementById('mm');
const btnStart = document.getElementById('start-btn');
const btnStop = document.getElementById('stop-btn');
const btnReset = document.getElementById('reset-btn');

// 반복실행 동작을 제거하기 위해 id를 받을 변수 선언
let interValid;

btnStart.onclick = function () {
    clearInterval(interValid);

    // 시간에 대해 값을 변경해주는 함수 operateTimer를 10ms마다 호출한다
    interValid = setInterval(operateTimer, 10);
};

btnStop.onclick = function () {
    //clearInterval 메소드에 반복실행 동작 id를 전달하여 타이머 동작을 취소한다
    clearInterval(interValid);
};

btnReset.onclick = function () {
    clearInterval(interValid);
    minutes = 0;
    seconds = 0;
    tenMillis = 0;
    appendTens.textContent = '00';
    appendSeconds.textContent = '00';
    appendMinutes.textContent = '00';
};

// 10ms 마다 시간에 대한 숫자가 증가하는 함수 operateTimer
function operateTimer() {
    tenMillis++;
    appendTens.textContent = tenMillis > 9 ? tenMillis : ':0' + tenMillis;
    if (tenMillis > 99) {
        seconds++;
        appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds;
        tenMillis = 0;
        appendTens.textContent = '00';
    }

    if (seconds > 59) {
        minutes++;
        appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes;
        seconds = 0;
        appendSeconds.textContent = '00';
    }
}
