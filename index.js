'use strict';
var bind = require('bind');
var wheel = require('eventwheel');
var speed = 100;
module.exports = Controller;

function Controller(el) {
  if (!(this instanceof Controller)) return new Controller(el);
  if (typeof el === 'string') el = document.querySelector(el);
  if (!el) el = document;
  this.element = el;
  this.factor = 1;
  this.scroll = this.scroll.bind(this);
}

Controller.prototype.set = function (factor) {
  this.factor = factor || 1;
  wheel[this.factor === 1 ? 'unbind' : 'bind'](this.element, this.scroll);
  return this;
};

Controller.prototype.clear = function () {
  return this.set();
};

Controller.prototype.scroll = function (e) {
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var delta = e.deltaY || e.detail || (-e.wheelDelta);
  delta /= Math.abs(delta);
  document.documentElement.scrollTop = document.body.scrollTop = scrollTop + this.factor * delta * speed;
};
