function Game() {

}


$(document).ready(function(){
  rick = new Rick();
  zombie = new Zombie();
  rick.initDisplay();
  zombie.initDisplay();

  ['j', 'i', 'l', 'k'].forEach(function(direction) {
    Mousetrap.bind(direction, function(){
      rick.move(direction);
    });
  });

  ['a', 'd', 'w', 's'].forEach(function(direction) {
    Mousetrap.bind(direction, function(){
      zombie.move(direction);
    });
  });
});

