window.onload=function(){


var theDrawers = document.querySelectorAll('.drawer')

/*-------------------------------------
| Give a data-section to each drawer
-------------------------------------*/

for (var i=0; i <theDrawers.length; i++){
theDrawers[i].dataset.section = i;
}

/*-------------------------------------
| Function which Toggle the class ' on'
-------------------------------------*/


function switchup(whichDrawer){
theDrawers[whichDrawer].classList.toggle('on');
}

/*-------------------------------------
| On event - start Function for each Drawer
-------------------------------------*/

theDrawers.forEach(function(currentDrawer){
currentDrawer.addEventListener('click',function(){
var theSection = this.dataset.section;
switchup(theSection);
});

});

};
