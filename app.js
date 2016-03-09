console.log("Sanity check");

$(document).ready(function() {
  var $this = $(this);
  var p1games = 0;
  var p2games = 0;
  // var p1sets = 0;
  // var p2sets = 0;
  // var p1totalFaults = 0;
  // var p2totalFaults = 0;
  // var p1pointFaults = 0;
  // var p2pointFaults = 0;
  // var p1aces = 0;
  // var p2aces = 0;
  // var p1winners = 0;
  // var p2winners = 0;
  // var p1UFE = 0;
  // var p2UFE = 0;
  var $p1points = $('#p1points');
  var $p2points = $('#p2points');
  var activeSet = 1;
  var $p1adv = $('#p1adv');
  var $p2adv = $('#p2adv');

  function activeSetSelector(activeSet) {
    if (activeSet === 1) {
      $p1activeSet = $('#p1set1')
      $p2activeSet = $('#p2set1')
    } else if (activeSet === 2) {
      $p1activeSet = $('#p1set2')
      $p2activeSet = $('#p2set2')
    } else if (activeSet === 3) {
      $p1activeSet = $('#p1set3')
      $p2activeSet = $('#p2set3')
    } else if (activeSet === 4) {
      $p1activeSet = $('#p1set4')
      $p2activeSet = $('#p2set4')
    } else if (activeSet === 5) {
      $p1activeSet = $('#p1set5')
      $p2activeSet = $('#p2set5')
    } else if (activeSet === 6) {
      $p1activeSet = $('#p1set6')
      $p2activeSet = $('#p2set6')
    } else {
      $p1activeSet = $('#p1set7')
      $p2activeSet = $('#p2set7')
    }
  };

  function p1gameProgressor() {
    var p1pointScore = $p1points.text();
    var p1count = parseInt(p1pointScore);
    if (p1count === 0 || p1count === 15) {
      p1count +=15
    } else if (p1count === 30) {
      p1count +=10
    } else if (p1count === 40) {
      if ((parseInt($p2points.text()) === 40) && ($p2adv.text() === 'AD')) {
        $p2adv.text('');
        p1count === 40;
      } else if ((parseInt($p2points.text()) === 40) && ($p1adv.text() !== 'AD')) {
      $p1adv.text('AD');
      p1count === 40;
      } else if ((parseInt($p2points.text()) === 40) && ($p1adv.text() === 'AD')) {
        $p1adv.text('');
        $p2adv.text('');
        p1count = 0;
        $p2points.text(0);
        if (p1games < 7) {
            p1games +=1;
            console.log(activeSet);
            // console.log($p1activeSet);
            activeSetSelector(activeSet);
            $p1activeSet.text(p1games);
            if (p1games === 7) {
              activeSet +=1;
              p1games = 0;
              p2games = 0;
            }
          }
      } else {
        p1count = 0;
        $p2points.text(0);
        if (p1games < 7) {
            p1games +=1;
            console.log(activeSet);
            activeSetSelector(activeSet);
            $p1activeSet.text(p1games);
            if (p1games === 7) {
              activeSet +=1;
              p1games = 0;
              p2games = 0;
          }
        }
      }
    }
    $p1points.text(p1count);
  }

  function p2gameProgressor() {var p2pointScore = $p2points.text();
    var p2count = parseInt(p2pointScore);
    if (p2count === 0 || p2count === 15) {
      p2count +=15
    } else if (p2count === 30) {
      p2count +=10
    } else if (p2count === 40) {
      if ((parseInt($p1points.text()) === 40) && ($p1adv.text() === 'AD')) {
        $p1adv.text('');
        p2count === 40;
      } else if ((parseInt($p1points.text()) === 40) && ($p2adv.text() !== 'AD')) {
      $p2adv.text('AD');
      p2count === 40;
      } else if ((parseInt($p1points.text()) === 40) && ($p2adv.text() === 'AD')) {
        $p2adv.text('');
        $p1adv.text('');
        p2count = 0;
        $p1points.text(0);
        if (p2games < 7) {
            p2games +=1;
            console.log(activeSet);
            // console.log($p1activeSet);
            activeSetSelector(activeSet);
            $p2activeSet.text(p2games);
            if (p2games === 7) {
              activeSet +=1;
              p2games = 0;
              p1games = 0;
            }
          }
      } else {
        p2count = 0;
        $p1points.text(0);
        if (p2games < 7) {
            p2games +=1;
            console.log(activeSet);
            activeSetSelector(activeSet);
            $p2activeSet.text(p2games);
            if (p2games === 7) {
              activeSet +=1;
              p2games = 0;
              p1games = 0;
            }
          }
        }
      };
    $p2points.text(p2count)
    }


// Player 1 Button Commands
  $('button1').on('click', function(event) {
    var $this = $(this);
    if ($this.attr('id') === 'p1ace') {
      p1gameProgressor();
    } else if ($this.attr('id') === 'p1winner') {
      p1gameProgressor();
    } else if ($this.attr('id') === 'p1oppUFE') {
      p1gameProgressor();
    } else if ($this.attr('id') === 'p1fault') {
      console.log('clicking p1fault');
    }
  })
// End of Player 1 Button Commands

// Player 2 Button Commands
  $('button2').on('click', function(event) {
    var $this = $(this);
    if ($this.attr('id') === 'p2ace') {
      p2gameProgressor();
    } else if ($this.attr('id') === 'p2winner') {
      p2gameProgressor();
    } else if ($this.attr('id') === 'p2oppUFE') {
      p2gameProgressor();
    } else if ($this.attr('id') === 'p2fault') {
      console.log('clicking p1fault');
    }
  })
// End of Player 2 Button Commands

})
