'use strict';
/** Imports */
require('pixi');
require('p2');
require('phaser');

import 'styles/style.styl';


export default class App extends Phaser.Game {
  constructor(config: Phaser.IGameConfig) {
    super(config);
  }
}


if (!module.parent) {
  window.onload = () => {
    const config: Phaser.IGameConfig = {
      width:           800,
      height:          600,
      renderer:        Phaser.AUTO,
      parent:          '',
      resolution:      1,
      forceSetTimeOut: false
    };

    new App(config);
  };
}
