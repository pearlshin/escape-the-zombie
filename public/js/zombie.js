function Zombie() {
  this.$port_authority = $('#port_authority');
  // this.x = this.$port_authority.width() * .10;
  // this.y = this.$port_authority.height() * .10;
  this.x = Math.floor((Math.random()* 800)+ 10);
  this.y = Math.floor((Math.random()*80)+100);
  this.width = 74;
  this.height = 201;
  this.life = 3; //0 will be dead
  this.isAlive = true;
  this.distanceMoved = 10;
  this.direction = "nothing yet";
  this.$sprite = $('div.zombie')

}

Zombie.prototype.initDisplay = function() {
    this.$sprite = $('<div class="character zombie"></div>');
    this.$port_authority.append(this.$sprite);
    this.setPosition();
}


Zombie.prototype.setPosition = function() {
  this.$sprite.css('top', this.y);
  this.$sprite.css('left', this.x);
}


Zombie.prototype.inBounds = function() {
  return true;
  // return (this.x < this.$port_authority.width() - this.width && this.x > 7 &&this.y > 3 && this.y < this.$port_authority.height() - this.height)
}


Zombie.prototype.move = function(direction){
  last_x = this.x;
  last_y = this.y;
  switch(direction) {
    case "a": //left
      this.x -= this.distanceMoved;
      break;
    case "d": //right
      this.x += this.distanceMoved;
      break;
    case "w": //up
      this.y -= this.distanceMoved;
      break;
    case "s": //down
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

Zombie.prototype.destroy = function() {
  this.$sprite.remove();
}
