var body          = document.querySelector('body'),
    header        = body.querySelector('.header'),
    title         = header.querySelector('.header--parallax'),
    slider        = body.querySelector('.portfolio--slider'),
    projects      = body.querySelectorAll('.portfolio--slider--project'),
    btn_prev      = body.querySelector('.portfolio--slider--previous'),
    btn_next      = body.querySelector('.portfolio--slider--next');

console.log(body.querySelector('.portfolio--slider'));
console.log(body.querySelector('.portfolio--slider--previous'));
console.log(body.querySelector('.portfolio--slider--next'));

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
  if (i == 4){ i = 0; }
  slider.style.transform = "translateX(-" + i * 25 + "%)";
  event.preventDefault();
});
btn_prev.addEventListener('click', function(event)
{
  i--;
  if (i == -1){ i = 2; }
  slider.style.transform = "translateX(-" + i * 25 + "%)";
  event.preventDefault();
});
