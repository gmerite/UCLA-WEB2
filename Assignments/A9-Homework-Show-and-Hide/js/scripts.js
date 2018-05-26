var textMickeyDetails = document.querySelector ('.mickey-details');
var MickeyImgs = document.querySelector('.mickey-img img');
var buttons = document.querySelector('button.product');
var changeText = document.querySelector('button.product span');


console.log('Image works', MickeyImgs);
console.log('check text works',textMickeyDetails);
console.log('buttons work', buttons);

//Hide the textMickeyDetails
textMickeyDetails.style.display='none';
// Choose by default the older Mickey photo
MickeyImgs.src=MickeyImgs.dataset.off;

buttons.addEventListener('click',function(){
console.log('Ouch you clicked me');

if (textMickeyDetails.style.display =='none')
{
  textMickeyDetails.style.display='block';
  MickeyImgs.src=MickeyImgs.dataset.on;
  changeText.innerHTML = 'the old version';

}
else{
  textMickeyDetails.style.display='none';
  MickeyImgs.src=MickeyImgs.dataset.off;
  changeText.innerHTML = 'more';
}


});
