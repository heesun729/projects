function clock() {
    // Date() 날짜를 저장할 수 있고, 날짜 관련 메서드도 제공해주는 내장 객체
    let date = new Date(); //현재 날짜와 시간이 저장된 Date 객체 반환
    let year = String(date.getFullYear()); // 연도 4자리
    let month = String(date.getMonth() + 1); // 0~11, +1 해줘야 현재 월
    let day = zero(date.getDate()); // 1~31
    let hour = zero(date.getHours()); //0~23
    let minute = zero(date.getMinutes()); //0~59
    let second = zero(date.getSeconds()); //0~59
    let session = 'AM';
    let week = weekday();

    //AM, PM 변환
    if (hour > 12) {
        hour = hour - 12;
        session = 'PM';
    }

    // 시계에 1의 자리 수가 나올 때 0을 넣어주는 함수 (1초 -> 01초)
    function zero(num) {
        return num < 10 ? '0' + num : num;
    }

    //요일을 추가해주는 함수
    function weekday() {
        // 일 ~ 토까지 요일이 저장된 배열 weekday
        let weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        return weekdays[date.getDay()]; // 현재 요일별로 0~6의 값이 나옴. 배열에서 요일을 리턴함
    }

    // 시계부분 화면에 출력하는 함수
    function write(year, month, day, hour, minute, second, week) {
        let clockday = document.getElementById('clock-day'); //<div id="clock-day"></div>
        let clocktime = document.getElementById('clock-time'); //<div id="clock-time"></div>
        clockday.innerText = year + ' · ' + month + ' · ' + day + ' ' + week;
        clocktime.innerText = hour + ' : ' + minute + ' : ' + second + ' ' + session;
    }

    write(year, month, day, hour, minute, second, week);
}

//Intervals 매번 일어나는일, 0.3초마다 clock()을 호출한다
setInterval(clock, 300);
