function Game() {

}








$(document).ready(function(){
  var rick = new Rick();
  rick.initDisplay();
  $('div#port_authority').click(function(){
    rick.x += 20;
    rick.y += 20;
    rick.setPosition();
  });
  $(document).keydown(function(event){
    if (event.keycode == '39') {
      rick.setPosition();
    }
  });
});

