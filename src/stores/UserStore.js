// @ts-check

import * as mobx from "mobx";

/**
 * @typedef {Object} CounterState
 * @property {string} count
 * @property {() => void} increment
 * @property {() => void} decrement
 */

/** @type {CounterState} */
export const counterState = mobx.observable({
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  });

  /**
 * Заполняет массив указанным значением.
 *
 * @template T Тип значения для заполнения массива.
 * @param {any[]} array Исходный массив (содержимое не важно, берется только длина).
 * @param {T} value Значение, которым нужно заполнить массив.
 * @returns {T[]} Новый массив, заполненный указанным значением.
 */
function fill(array, value) {
  return array.map(() => value);
}