function moveMapToLocation(coords) {
    const map = document.getElementById('map');
    const locator = map.gmpxLocator;
    locator.map.panTo(coords);
    locator.map.setZoom(10);
}
