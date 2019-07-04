function getModal() {
    var el = document.getElementById('shadow');
    el.style.display = 'block';
    el.style.transition = '1s';
}

function closeWindow() {
    var el = document.getElementById('shadow');
    el.style.display = 'none';
}