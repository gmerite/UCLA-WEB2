
// alert('You linked to me.');

console.log('This is only seen by us.');

//wait for page to load before we try to use the orbs
window.onload=function() {

//grabbing orbs and assigning to a handle (variable)
var orbs = document.querySelectorAll('.orb');
//we select on the page the class orb
console.log(orbs);
console.log(orbs[0]);
console.log(orbs[1]);
console.log(orbs[2]);
console.log(orbs[3]);

/* Orb1 Management   */
orbs[0].addEventListener('click', function(){
console.log('Ouch you clicked me.');

// Class list look for all the classes element, if it has a class on aremove it, if it doesn't add it
orbs[0].classList.toggle('on');
});

orbs[0].addEventListener('mouseover', function(){
console.log('Ouch you mouseovered me.');
orbs[0].src = './img/sun.png';
});

orbs[0].addEventListener('mouseout', function(){
console.log('Ouch you mouseoutted me.');
orbs[0].src = './img/moon.png';
});

/* Orb2 Management   */
orbs[1].addEventListener('click', function(){
console.log('Ouch you clicked me.');

// Class list look for all the classes element, if it has a class on aremove it, if it doesn't add it
orbs[1].classList.toggle('on');
});

orbs[1].addEventListener('mouseover', function(){
console.log('Ouch you mouseovered me.');
orbs[1].src = './img/sun.png';
});

orbs[1].addEventListener('mouseout', function(){
console.log('Ouch you mouseoutted me.');
orbs[1].src = './img/moon.png';
});

/* Orb3 Management   */
orbs[2].addEventListener('click', function(){
console.log('Ouch you clicked me.');

// Class list look for all the classes element, if it has a class on aremove it, if it doesn't add it
orbs[2].classList.toggle('on');
});

orbs[2].addEventListener('mouseover', function(){
console.log('Ouch you mouseovered me.');
orbs[2].src = './img/sun.png';
});

orbs[2].addEventListener('mouseout', function(){
console.log('Ouch you mouseoutted me.');
orbs[2].src = './img/moon.png';
});

/* Orb4 Management   */
orbs[3].addEventListener('click', function(){
console.log('Ouch you clicked me.');

// Class list look for all the classes element, if it has a class on aremove it, if it doesn't add it
orbs[3].classList.toggle('on');
});

orbs[3].addEventListener('mouseover', function(){
console.log('Ouch you mouseovered me.');
orbs[3].src = './img/sun.png';
});

orbs[3].addEventListener('mouseout', function(){
console.log('Ouch you mouseoutted me.');
orbs[3].src = './img/moon.png';
});

};
