/* 유저 이미지 */

const mainimg = document.getElementById('main-img');

mainimg.addEventListener('mouseover', () => {
    mainimg.src = 'assets/main-img2.jpeg';
});

mainimg.addEventListener('mouseout', () => {
    mainimg.src = 'assets/main-img.jpeg';
});

/* 클릭시 프로젝트 상세 내용 */

function showBox(index) {
    const projectAboutBoxes = document.getElementsByClassName('project-about-box');

    // 모든 project-about-box 숨기기
    for (let i = 0; i < projectAboutBoxes.length; i++) {
        projectAboutBoxes[i].style.display = 'none';
    }

    // 클릭한 인덱스에 해당하는 project-about-box 보이게 하기
    const selectedProjectAboutBox = document.getElementById('box' + (index + 1));
    if (selectedProjectAboutBox) {
        selectedProjectAboutBox.style.display = 'flex';
    }
}

/* contact 이메일 전송 */
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // var formData = {
    //     name: document.getElementById('name').value,
    //     email: document.getElementById('email').value,
    //     message: document.getElementById('message').value
    // };

    // // AJAX를 이용한 데이터 전송
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'https://your-backend-api-url'); // 백엔드 API 엔드포인트 지정
    // xhr.setRequestHeader('Content-Type', 'application/json');

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //         if (xhr.status === 200) {
    //             // 성공적으로 서버에서 응답을 받았을 때의 동작
    //             alert('이메일이 전송되었습니다.');
    //         } else {
    //             // 서버 응답이 실패했을 때의 동작
    //             alert('이메일 전송에 실패했습니다.');
    //         }
    //     }
    // };

    // // JSON 형태로 데이터 전송
    // xhr.send(JSON.stringify(formData));
}

/* 스크롤 이동 */
