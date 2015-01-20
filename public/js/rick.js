function Rick() {
  this.$port_authority = $('#port_authority');
  this.x = this.$port_authority.width * .10;
  this.y = this.$port_authority.height * .10;
  this.life = 3; //0 will be dead
  this.isAlive = true;
  this.outOfBounds = false;
  this.distanceMoved = 3;
  this.direction = "nothing yet";
  this.$sprite = $('div.rick')
  // this.gun
}

Rick.prototype.initDisplay = function() {
    this.$sprite = $('<div class="character rick"></div>');
    this.$port_authority.append(this.$sprite);
}


Rick.prototype.setPosition = function() {
  this.$sprite.css('top', this.x);
  this.$sprite.css('left', this.y);
}


Rick.prototype.inBounds = function() {
  return (this.x < this.$port_authority.width - 2 && this.x > 2 && this.y > 2 && this.y < this.$port_authority.height - 2)
}


Rick.prototype.move = function(direction){
  last_x = this.x;
  last_y = this.y;
  switch(direction) {
    case "left":
      this.x -= this.distanceMoved;
      break;
    case "right":
      this.x += this.distanceMoved;
      break;
    case "up":
      this.y -= this.distanceMoved;
      break;
    case "down":
      this.y += this.distanceMoved;
      break;
  }
  if (this.inBounds()) {
    this.setPosition();
  } else {
    this.x = last_x;
    this.y = last_y;
  }

}

Rick.prototype.destroy = function() {
  this.$sprite.remove();
}
