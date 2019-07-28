$(document).ready(function() {
    $('#startbtn').click(start);
});
var score = 0;
function start() {
  $('#startbtn').hide();
  showScore();
  newLetter();
  $(document).keypress(function(event){
    var letter = String.fromCharCode(event.keyCode);
    $('.' + letter).animate( // primeste 2 parametrii
      {'top': (screen.height - 200) + 'px'}, //prop css animante
      'slow' //viteza
    );
    $('.' + letter).hide('slow', function(){
      $(this).remove();
      increaseScore();
    });
  });
}
function increaseScore(){
  score += 1;
  showScore();
}
function showScore() {
  $('#score').text('Score: ' + score);
}
function newLetter() {
  var letter = randomLetter();
  var x = randomPosition(screen.width - 20);
  var y = randomPosition(screen.height - 200);
  div = $('<div></div>')
          .text(letter)
          .css('top', y + 'px')
          .css('left', x + 'px')
          .css('background-color', randomColor())
          .attr('class', 'letter ' + letter);
  $('body').append(div);
  setTimeout(newLetter, 3000);
}
function randomLetter() {
  var code = Math.floor(Math.random() * 26 + 65);
  var letter = String.fromCharCode(code);
  return letter;
}
function randomPosition(max) {
  return Math.floor(Math.random() * max);
}
function randomColor(){
  var red = Math.floor(Math.random() * 255); // intre 0-255 variaza intre negru si alb, 250250250 e alb
  var green = Math.floor(Math.random() * 255); // intre 0-255 variaza intre negru si alb, 250250250 e alb
  var blue = Math.floor(Math.random() * 255); // intre 0-255 variaza intre negru si alb, 250250250 e alb
  return "rgb(" + red + "," + green + ","+ blue +")";
}
