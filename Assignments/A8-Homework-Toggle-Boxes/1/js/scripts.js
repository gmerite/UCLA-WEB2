window.onload=function(){


/*-------------------------------------
| Manage Event Listener on Boxes
-------------------------------------*/
var boxes = document.querySelectorAll('.solution .box');


  for (var i=0; i < boxes.length; i++){
    boxes[i].dataset.section = i ;
  }

function boxmove(whichBox){
  boxes[whichBox].classList.toggle('on');
}

boxes.forEach(function(currentLink){
  currentLink.addEventListener('click',function(){
    var theSection = this.dataset.section;
    boxmove(theSection);
  });
});

};
