var header = document.querySelector('.header');

function cover()
{
  var height = window.innerHeight;
  height = height + height * 0.2;
  header.style.height = height + 'px';
}
cover();
window.addEventListener('resize', function(event){
  cover();
});

// window.addEventListener( 'scroll', function()
// {
//   if (body.scrollTop < 400) {
//     header_center.style.opacity = 1 - body.scrollTop / 200;
//     header.style.backgroundPosition = '50% ' + '-' + (body.scrollTop / 2) + 'px';
//   }
// });
//
// //requestAnimationFrame(fade);
