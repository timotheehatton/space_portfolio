var body          = document.querySelector('body'),
    header        = body.querySelector('.header'),
    title         = header.querySelector('.header--parallax'),
    slider        = body.querySelector('.portfolio--content--project--slider'),
    btn_prev      = body.querySelector('.portfolio--content--previous'),
    btn_next      = body.querySelector('.portfolio--content--next');

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

// slider
var i = 0;
btn_next.addEventListener('click', function(event)
{
  i++;
  if (i == 3){ i = 0; }
  slider.style.transform = "translateX(-" + i * 100 + "%)";
  event.preventDefault();
});
btn_prev.addEventListener('click', function(event)
{
  i--;
  if (i == -1){ i = 2; }
  slider.style.transform = "translateX(-" + i * 100 + "%)";
  event.preventDefault();
});
