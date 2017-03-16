var body          = document.querySelector('body'),
    header        = body.querySelector('.header'),
    title         = header.querySelector('.header--parallax');

// header cover
function cover()
{
  var height = window.innerHeight;
  var width  = window.innerWidth;
  if (width <= 1180) {
    height = height;
  }
  else {
    height = height + height * 0.2;
  }
  header.style.height = height + 'px';
}
cover();
window.addEventListener('resize', function()
{
  cover();
});

// parallax
function paralax()
{
  title.style.transform = "translateY(-" + body.scrollTop * 0.4 + "px)";
}

// window.addEventListener( 'scroll', function()
// {
//   window.requestAnimationFrame(paralax);
// });
