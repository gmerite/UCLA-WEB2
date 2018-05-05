window.onload=function(){

var theButtons = document.querySelectorAll('#stage .set img.buttons');
var theRockets = document.querySelectorAll('#stage .set img.rockets');

console.log('theButtons');


/*-------------------------------------
| Function Click on-off
-------------------------------------*/


function clickimg() {

        var img = this.src;
        var imgoff = this.dataset.off;

        if (img.includes(imgoff)==true) {
            this.src= this.dataset.on;
        }
         else {
           this.src = this.dataset.off;
    }
}




theButtons[0].addEventListener('click',clickimg);
theButtons[0].addEventListener('click',function(){
    theRockets[0].classList.toggle('off');

    theRockets[1].classList.toggle('off');
});



theButtons[1].addEventListener('click',clickimg);
theButtons[1].addEventListener('click',function(){
    theRockets[2].classList.toggle('off');
    theRockets[3].classList.toggle('off');
    theRockets[2].classList.toggle('onfire');
});


theButtons[2].addEventListener('click',clickimg);
theButtons[2].addEventListener('click',function(){
    theRockets[4].classList.toggle('off');
    theRockets[5].classList.toggle('off');
});



};
