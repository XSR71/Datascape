
'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    var style = { font: '65px Arial', fill: '#000000', align: 'center'};
	this.game.stage.backgroundColor = 0xffffff;
    this.sprite = this.game.add.sprite(this.game.world.centerX, 200, 'logo');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.instructionsText = this.game.add.text(this.game.world.centerX, 350, 'Click anywhere to escape!', { font: '16px Arial', fill: '#000000', align: 'center'});
    this.instructionsText.anchor.setTo(0.5, 0.5);

    //this.sprite.angle = -20;
    //this.game.add.tween(this.sprite).to({width: 200}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};

module.exports = Menu;
