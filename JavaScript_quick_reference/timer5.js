function preparePage() {
        if ((document.getElementsByClassName('box'))[0].className == 'box') {
            ((document.getElementsByClassName('box')))[0].className = 'box swap';
        } else {
            ((document.getElementsByClassName('box')))[0].className = 'box';
        }

}

function timeOut(){
  //  setTimeout(preparePage,10000);
      setInterval(preparePage,5000);
}

window.onload = function(){
	timeOut();
};
