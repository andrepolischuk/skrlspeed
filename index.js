
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
  if (!el) el = document;

  this._element = el;
  this._factor = 1;
  this._fn = scroll(this);
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
  wheel[this._factor === 1 ? 'unbind' : 'bind'](this._element, this._fn);
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

function scroll(obj) {
  return function(e) {
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var delta = e.deltaY || e.detail || (-e.wheelDelta);
    delta /= Math.abs(delta);

    document.documentElement.scrollTop =
      document.body.scrollTop = scrollTop + obj._factor * delta * speed;
  };
}
