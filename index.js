
'use strict';

/**
 * Module dependencies
 */

var bind = require('bind');
var wheel = require('eventwheel');

/**
 * Default speed
 */

var speed = 100;

/**
 * Expose controller
 */

module.exports = Controller;

/**
 * Speed controller
 *
 * @param {Element} el
 * @api public
 */

function Controller(el) {
  if (!(this instanceof Controller)) return new Controller(el);
  if (typeof el === 'string') el = document.querySelector(el);
  if (!el) el = document;

  this.element = el;
  this.factor = 1;
  this.scroll = this.scroll.bind(this);
}

/**
 * Set factor
 *
 * @param {Number} factor
 * @return {Object}
 * @api public
 */

Controller.prototype.set = function(factor) {
  this.factor = factor || 1;
  wheel[this.factor === 1 ? 'unbind' : 'bind'](this.element, this.scroll);
  return this;
};

/**
 * Clear factor
 *
 * @return {Object}
 * @api public
 */

Controller.prototype.clear = function() {
  return this.set();
};


/**
 * Scroll handler
 *
 * @param {Object} obj
 * @param {Event} e
 * @api public
 */

Controller.prototype.scroll = function(e) {
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var delta = e.deltaY || e.detail || (-e.wheelDelta);
  delta /= Math.abs(delta);

  document.documentElement.scrollTop =
    document.body.scrollTop = scrollTop + this.factor * delta * speed;
}
