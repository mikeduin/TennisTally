console.log("Sanity check");

$(document).ready(function() {
  var $this = $(this);
  // var p1sets = 0;
  // var p2sets = 0;
  // var p1points = 0;
  // var p2points = 0;
  // var p1faults = 0;
  // var p2faults = 0;
  // var p1aces = 0;
  // var p2aces = 0;
  // var p1winners = 0;
  // var p2winners = 0;
  // var p1UFE = 0;
  // var p2UFE = 0;
  var $p1game = $('#p1game');

  $('button1').on('click', function(event) {
    var $this = $(this);
    if ($this.attr('id') === 'p1ace') {
      console.log('clicking ace');
      var p1gameScore = $p1game.text();
      var count = parseInt(p1gameScore);
      if (count === 0 || count === 15) {
        count +=15
      } else if (count === 30) {
        count +=10
      } else (count = 0);
      $p1game.text(count)
    } else if ($this.attr('id') === 'p1fault') {
      console.log('this is a p1fault')
    } else (console.log('whatever'))

  })


})
