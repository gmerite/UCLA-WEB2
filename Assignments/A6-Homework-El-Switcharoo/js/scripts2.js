window.onload=function(){

var theButtons = document.querySelectorAll('#stage .set img.buttons');
var theRockets = document.querySelectorAll('#stage .set img.rockets');



/*-------------------------------------
| Class Change on the Rockets
-------------------------------------*/



function Rocketfunction(whichRocket){
    theRockets[whichRocket].classList.toggle('off');

    // whichRocket++;
    console.log(whichRocket);
}


function Buttonfunction(whichButton){
    if (theButtons[whichButton].src.includes('off')==true){
        theButtons[whichButton].src=theButtons[whichButton].dataset.on;
    }
    else{
        theButtons[whichButton].src=theButtons[whichButton].dataset.off;
        }
}

theButtons.forEach(function(currentButton){
currentButton.addEventListener('click',function(){
var theButtonSection = this.dataset.section;
Buttonfunction(theButtonSection);
Rocketfunction(theRocketSection);
});

});

//
// function clickimg() {
//
//         var img = this.src;
//         var imgoff = this.dataset.off;
//
//         if (img.includes(imgoff)==true) {
//             this.src= this.dataset.on;
//         }
//          else {
//            this.src = this.dataset.off;
//     }
// }


//
//
// theButtons[0].addEventListener('click',clickimg);
// theButtons[0].addEventListener('click',function(){
//     theRockets[0].classList.toggle('off');
//
//     theRockets[1].classList.toggle('off');
// });
//
//
//
// theButtons[1].addEventListener('click',clickimg);
// theButtons[1].addEventListener('click',function(){
//     theRockets[2].classList.toggle('off');
//     theRockets[3].classList.toggle('off');
//     theRockets[2].classList.toggle('onfire');
// });
//
//
// theButtons[2].addEventListener('click',clickimg);
// theButtons[2].addEventListener('click',function(){
//     theRockets[4].classList.toggle('off');
//     theRockets[5].classList.toggle('off');
// });
//


};
