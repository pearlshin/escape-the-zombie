function Rick() {
  this.$port_authority = $('#port_authority');
  // this.x = this.$port_authority.width() * .10;
  // this.y = this.$port_authority.height() * .10;
  this.x = 20;
  this.y = 650;
  this.width = 74;
  this.height = 201;
  this.life = 3; //0 will be dead
  this.isAlive = true;
  this.distanceMoved = 20;
  this.direction = "nothing yet";
  this.$sprite = $('div.rick')
  // this.gun
}

Rick.prototype.initDisplay = function() {
    this.$sprite = $('<div class="character rick"></div>');
    this.$port_authority.append(this.$sprite);
    this.setPosition();
}


Rick.prototype.setPosition = function() {
  this.$sprite.css('top', this.y);
  this.$sprite.css('left', this.x);
}


Rick.prototype.inBounds = function() {

  return (this.x < this.$port_authority.width() - this.width/2 && this.x > this.width/2 &&this.y > this.y/2 && this.y < this.$port_authority.height() - this.height/2)
}


Rick.prototype.move = function(direction){
  last_x = this.x;
  last_y = this.y;
  switch(direction) {
    case "j": //left
      this.x -= this.distanceMoved;
      break;

    case "l": //right
      this.x += this.distanceMoved;
      break;
    case "i": //up
      this.y -= this.distanceMoved;
      break;
    case "k": //down
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
