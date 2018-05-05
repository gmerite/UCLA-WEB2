/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/

console.log('Check that its working');

/*Wait for page to load before running the script  */
window.onload=function() {

  var feat = document.querySelectorAll('.feature');

  var bubble = document.querySelectorAll('.bubble');

  console.log(feat);
  console.log(feat[0]);
  console.log(feat[1]);
  console.log(feat[2]);

  /* bubble 1 Management   */

  feat[0].addEventListener('mouseover', function(){
  console.log('mouseover 0 works.');
  bubble[0].classList.toggle('on');
  });


feat[0].addEventListener('mouseout', function(){

  console.log('mouseout 0 works');
  bubble[0].classList.toggle('on');
});


/* bubble 2 Management   */

feat[1].addEventListener('mouseover', function(){
console.log('mouseover 0 works.');
bubble[1].classList.toggle('on');
});


feat[1].addEventListener('mouseout', function(){

console.log('mouseout 0 works');
bubble[1].classList.toggle('on');
});



/* bubble 3 Management   */

feat[2].addEventListener('mouseover', function(){
console.log('mouseout 0 works.');
bubble[2].classList.toggle('on');
});


feat[2].addEventListener('mouseout', function(){

console.log('mouseout 0 works');
bubble[2].classList.toggle('on');
});


};
