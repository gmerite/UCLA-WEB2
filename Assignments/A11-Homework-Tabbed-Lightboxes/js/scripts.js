
/*-------------------------------------
| Lightboxes
-------------------------------------*/

var theImages = document.querySelectorAll('.pokemonimgs img');
var theLightbox = document.querySelector('.lightbox');
var theCloseButton = document.querySelector('.lightbox .close');
var lightBoxImg = document.querySelector('.lightbox img');

function light_on(){
  lightBoxImg.src= this.src;
  theLightbox.style.display='block';
}

function light_off (){
  theLightbox.style.display='none';
}

theImages.forEach(function(elements){
elements.addEventListener('click',light_on);
});

theCloseButton.addEventListener('click',light_off);

/*-------------------------------------
| Tabs
-------------------------------------*/

var Tabs = document.querySelectorAll('nav a');
var theSections = document.querySelectorAll('.container section');
console.log(theSections);



function switchSection(whichClicked){
  //Starts at 1
  whichClicked = whichClicked - 1;

//Hide them All
  for(var i = 0; i < theSections.length; i++) {
    theSections[i].style.display ='none';
  }

//Show the Click none
theSections[whichClicked].style.display='block';

//Change Class of the Clicked Tabs
Tabs.forEach(function(elements){
elements.classList.remove('theChosenOne');
});
Tabs[whichClicked].classList.add('theChosenOne')
}

switchSection(1);

//Event Listener for All
Tabs.forEach(function(currentLink){
currentLink.addEventListener('click',function(event){
event.preventDefault();
var theSectionNumber = this.dataset.section;
switchSection(theSectionNumber);
});
});
