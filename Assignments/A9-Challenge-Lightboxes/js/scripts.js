var imageDials = document.querySelectorAll('div.choices img');
var linkTheme = document.querySelector('link.theme');

console.log('Image shows', imageDials);

imageDials[1].addEventListener('click', function(){
console.log('you clicked me');
imageDials[1].classList.add('chosen');
imageDials[0].classList.remove('chosen');
imageDials[2].classList.remove('chosen');

var whichTheme = imageDials[1].dataset.theme;
linkTheme.href= whichTheme;
});


imageDials[2].addEventListener('click', function(){
console.log('you clicked me');
imageDials[2].classList.add('chosen');
imageDials[0].classList.remove('chosen');
imageDials[1].classList.remove('chosen');

var whichTheme = imageDials[2].dataset.theme;
linkTheme.href= whichTheme;
});

imageDials[0].addEventListener('click', function(){
console.log('you clicked me');
imageDials[0].classList.add('chosen');
imageDials[1].classList.remove('chosen');
imageDials[2].classList.remove('chosen');

var whichTheme = imageDials[0].dataset.theme;
linkTheme.href= whichTheme;
});
