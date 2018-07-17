$(document).ready(function(){

  var memorizeitems = ["Speeches", "Monologues", "Poems", "Dialogues"];
  var cur_item = 0;
  
  function event() {
    cur_item = (cur_item + 1) % memorizeitems.length;
    $('#memorize-items').html(memorizeitems[cur_item]);
  }
  
  window.setInterval(event, 2500);

});