
'use strict';

/**
 * Module dependencies
 */

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
  if (!el) el = window;

  this._element = el;
  this._factor = 1;
  this._fn = scroll.bind(this);
}

/**
 * Set factor
 *
 * @param {Number} factor
 * @return {Object}
 * @api public
 */

Controller.prototype.set = function(factor) {
  this._factor = factor || 1;
  wheel[this._factor === 1 ? 'unbind' : 'bind'](window, this._fn);
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
 * @param {Event} e
 * @api public
 */

function scroll(e) {
  e.preventDefault();

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var delta = e.deltaY || e.detail || (-e.wheelDelta);
  delta /= Math.abs(delta);

  document.documentElement.scrollTop =
    document.body.scrollTop = scrollTop + this._factor * delta * speed;
}
