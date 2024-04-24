// vr.js
window.addEventListener('load', function () {
    var cameraEl = document.querySelector('[camera]'); // Get the camera entity
    var position = cameraEl.getAttribute('position'); // Get the current position

    function moveUp() {
        position.y += 0.1; // Increase the y-coordinate to move up
        cameraEl.setAttribute('position', position);
    }

    function moveDown() {
        position.y -= 0.1; // Decrease the y-coordinate to move down
        cameraEl.setAttribute('position', position);
    }

    document.addEventListener('keydown', function (e) {
        if (e.code === 'Space') { // Listen for space key to move up
            moveUp();
        } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') { // Listen for ctrl key to move down
            moveDown();
        }
    })
});