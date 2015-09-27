function preparePage() {
    document.getElementById('swap').onclick = function () {
        if ((document.getElementsByClassName('box'))[0].className == 'box') {
            ((document.getElementsByClassName('box')))[0].className = 'box swap';
        } else {
            ((document.getElementsByClassName('box')))[0].className = 'box';
        }
    };
}


window.onload = function () {
    preparePage();
};
