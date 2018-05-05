var imageDials = document.querySelectorAll('div.choices img');
var linkTheme = document.querySelector('link.theme');

console.log('Image shows', imageDials);

imageDials.forEach(function(item){
item.addEventListener('click', function(){
  console.log('Logged version');

  imageDials[1].classList.remove('chosen');
  imageDials[0].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');


item.classList.add('chosen');
var whichTheme = item.dataset.theme;
linkTheme.href= whichTheme;

});
});
