(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var body = document.querySelector('body'),
    header = body.querySelector('.header'),
    title = header.querySelector('.header--parallax');

// header cover
function cover() {
  var height = window.innerHeight;
  var width = window.innerWidth;
  if (width <= 1180) {
    height = height;
  } else {
    height = height + height * 0.2;
  }
  header.style.height = height + 'px';
}
cover();
window.addEventListener('resize', function () {
  cover();
});

// parallax
function paralax() {
  title.style.transform = "translateY(-" + body.scrollTop * 0.4 + "px)";
}

// window.addEventListener( 'scroll', function()
// {
//   window.requestAnimationFrame(paralax);
// });

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
