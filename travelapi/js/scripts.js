/*!
 * Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

const userInput = document.getElementById('searchInput').value;
// let searchCountry =
//     'http://apis.data.go.kr/1262000/TravelAlarmService2/getTravelAlarmList2?serviceKey=cVWMhvlCiNIH3BM39WylnLhy8AFKqNKJ4b3XUz2zlNsHjcNU1h3HyED79QidCgXMcGf%2FCKlONVrwiPHQIMyGCg%3D%3D&pageNo=1&numOfRows=10&cond[country_nm::EQ]' +
//     userInput +
//     '&cond[country_iso_alp2::EQ]=GH';

window.addEventListener('DOMContentLoaded', (event) => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0rem 0rem -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

let marker;
let map;
let autocomplete;

// 구글 지도 초기화 함수
function initMap() {
    // 서울의 좌표 (위도: 37.5665, 경도: 126.9780)
    const seoulCoords = { lat: 37.5665, lng: 126.978 };

    // 전역 변수로 map 초기화
    map = new google.maps.Map(document.getElementById('map'), {
        center: seoulCoords, // 초기 중심 위치 (서울)
        zoom: 13, // 초기 줌 레벨
    });

    // 초기에 마커 추가
    marker = new google.maps.Marker({
        position: seoulCoords, // 마커 위치 (서울)
        map: map,
        title: 'Hello, Seoul!',
    });

    // Autocomplete 설정
    const input = document.getElementById('locationInput');
    autocomplete = new google.maps.places.Autocomplete(input);

    // Autocomplete 이벤트 리스너 추가
    autocomplete.addListener('place_changed', onPlaceChanged);
}

// 장소가 변경되었을 때 호출되는 함수
function onPlaceChanged() {
    const place = autocomplete.getPlace();

    if (!place.geometry) {
        alert('No details available for input: ' + place.name);
        return;
    }

    // 마커 위치 업데이트
    marker.setPosition(place.geometry.location);

    // 지도 중심 위치를 선택한 장소로 이동
    map.panTo(place.geometry.location);

    // 지도 줌 레벨 조정 (원하는 레벨로 수정)
    map.setZoom(15);
}

// 현재 위치 검색 함수
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            // 기존 마커 위치 업데이트
            marker.setPosition(currentLocation);

            // 지도 중심 위치를 현재 위치로 부드럽게 이동
            map.panTo(currentLocation);

            map.setZoom(18);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

//API와 비교

// function searchCountry() {
//     const isDangerous = checkIfDangerous(userInput);
//     const alertDiv = document.querySelector('.alert');
//     alertDiv.textContent = isDangerous
//         ? `${userInput} is a dangerous area.`
//         : `${userInput} is not a dangerous area.`;
// }

// function checkIfDangerous(countryName) {
//     // 실제 API와 비교
// }

function searchCountry() {
    const alertDiv = document.getElementsByClassName('.alert');
    alertDiv.textContent = `${userInput} is not a dangerous area.`;
}
