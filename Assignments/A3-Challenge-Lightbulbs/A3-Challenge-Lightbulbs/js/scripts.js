console.log('Check that its working');


window.onload=function(){

var Lightbulb = document.querySelectorAll('div img');


console.log('Lightbulb array', Lightbulb);
console.log('Lightbulb 1', Lightbulb[0]);
console.log('Lightbulb 2', Lightbulb[1]);
console.log('Lightbulb 3', Lightbulb[2]);

/*-------------------------------------
| First Lightbulb
-------------------------------------*/

Lightbulb[0].addEventListener('mouseover', function(){
console.log('over');
Lightbulb[0].src = "./img/red-on.png";
});

Lightbulb[0].addEventListener('mouseout',function(){
console.log('out');
Lightbulb[0].src = "./img/red-off.png";
});

/*-------------------------------------
| Second LightBulb
-------------------------------------*/


Lightbulb[1].addEventListener('mouseover', function(){
console.log('over');
Lightbulb[1].src = "./img/green-on.png";
});

Lightbulb[1].addEventListener('mouseout',function(){
console.log('out');
Lightbulb[1].src = "./img/green-off.png";
});


Lightbulb[1].addEventListener('mouseclick', function(){
console.log('over');
Lightbulb[1].src = "./img/green-on.png";
});


/*-------------------------------------
| THird LightBulb
-------------------------------------*/


Lightbulb[2].addEventListener('mouseover', function(){
console.log('over');
Lightbulb[2].src = "./img/blue-on.png";
});

Lightbulb[2].addEventListener('mouseout',function(){
console.log('out');
Lightbulb[2].src = "./img/blue-off.png";
});

};
