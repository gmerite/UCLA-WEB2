/*-------------------------------------
| Grab some assets
-------------------------------------*/
var tabLinks = document.querySelectorAll('.tabbed .tabs a');
var theSections = document.querySelectorAll('.tabbed section');
//
// console.log(tabLinks);
// console.log(theSections);

/*-------------------------------------
| One function to Rull All
-------------------------------------*/

//function declaration

function switchSection(whichSection) {

  whichSection = whichSection -1;
  console.log(whichSection);

// hide them all by default
  for(var i = 0; i < theSections.length; i++) {
    theSections[i].style.display ='none';
  }


  //show the chosen One
  theSections[whichSection].style.display= 'block';

  /*-------------------------------------
  | Links
  -------------------------------------*/

  tabLinks.forEach(function(theLink){
    theLink.classList.remove('chosen');
  });

  tabLinks[whichSection].classList.add('chosen');
}

switchSection(1);

/*-------------------------------------
| Manage Event Listener on tabLinks
-------------------------------------*/

tabLinks.forEach(function(currentLink){
  currentLink.addEventListener('click',function(event){
    event.preventDefault();
    var theSection = this.dataset.section;
    switchSection(theSection);
  });
});
