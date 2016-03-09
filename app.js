console.log("Sanity check");

$(document).ready(function() {
  var $this = $(this);
  var p1games = 0;
  var p2games = 0;
  // var p1sets = 0;
  // var p2sets = 0;
  var p1totalFaults = 0;
  var p2totalFaults = 0;
  var p1pointFaults = 0;
  var p2pointFaults = 0;
  var p1dblFaults = 0;
  var p2dblFaults = 0;
  var p1pointsWon = 0;
  var p2pointsWon = 0;
  var p1aces = 0;
  var p2aces = 0;
  var p1winners = 0;
  var p2winners = 0;
  var p1UFE = 0;
  var p2UFE = 0;
  var $p1points = $('#p1points');
  var $p2points = $('#p2points');
  var activeSet = 1;
  var $p1adv = $('#p1adv');
  var $p2adv = $('#p2adv');
  var $p1scoreboard = $('#p1scoreboard');
  var $p2scoreboard = $('#p2scoreboard');
  var $p1currGame = $('#p1currGame');
  var $p2currGame = $('#p2currGame');
  var $p1gameAction = $('#p1gameAction');
  var $p2gameAction = $('#p2gameAction');
  var $p1summaryHead = $('#p1summaryHead');
  var $p2summaryHead = $('#p2summaryHead');

  // var $p1gamesTotal = $('#p1gamesTotal');
  // var $p2gamesTotal = $('#p2gamesTotal');
  // var $p1ptsTotal = $('#p1ptsTotal');
  // var $p2ptsTotal = $('#p2ptsTotal');
  // var $p1acesTotal = $('#p1acesTotal');
  // var $p2acesTotal = $('#p2acesTotal');


  // $('#playerOneButton').on('click', function(event) {
  //   var playerOneName = $('#playerOneName').val();
  //   $('#playerOneServeButton').text(playerOneName);
  //   console.log(playerOneName);
  // });
  //
  // $('#playerTwoButton').click(function() {
  //   var playerTwoName = $('#playerTwoName').val();
  //   $('#playerTwoServeButton').text(playerTwoName);
  // });

  // Firebase Code
  var myDataRef = new Firebase ('https://tennistally.firebaseio.com/');

  var playerOneRef = new Firebase ('https://tennistally.firebaseio.com/playerone');

  var playerTwoRef = new Firebase ('https://tennistally.firebaseio.com/playertwo');

  $('#playerForm').on('submit', function(event) {
    var playerOneName = $('#playerOneName').val();
    var playerTwoName = $('#playerTwoName').val();
    var playerOneEmail = $('#playerOneEmail').val();
    var playerTwoEmail = $('#playerTwoEmail').val();
    playerOneRef.set({
      name: playerOneName,
      email: playerOneEmail,
    });
    playerTwoRef.set({
      name: playerTwoName,
      email: playerTwoEmail,
    });
  })

  playerOneRef.on('value', function(data) {
    var p1name = data.val().name;
    $p1scoreboard.text(p1name);
    $p1currGame.text(p1name);
    $p1gameAction.text(p1name);
    $p1summaryHead.text(p1name);
  })

  playerTwoRef.on('value', function(data) {
    var p2name = data.val().name;
    $p2scoreboard.text(p2name);
    $p2currGame.text(p2name);
    $p2gameAction.text(p2name); 
    $p2summaryHead.text(p2name);
  })


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
    p1pointFaults = 0;
    p2pointFaults = 0;
  }

  function p2gameProgressor() {
    var p2pointScore = $p2points.text();
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
    $p2points.text(p2count);
    p1pointFaults = 0;
    p2pointFaults = 0;
    }


// Player 1 Button Commands
  $('button1').on('click', function(event) {
    var $this = $(this);
    if ($this.attr('id') === 'p1ace') {
      p1gameProgressor();
      p1aces += 1;
      p1pointsWon += 1;
      $p1acesTotal.text(p1aces);
    } else if ($this.attr('id') === 'p1winner') {
      p1gameProgressor();
      p1winners += 1;
      p1pointsWon += 1;
    } else if ($this.attr('id') === 'p1oppUFE') {
      p1gameProgressor();
      p2UFE += 1;
      p2pointsWon += 1;
    } else if ($this.attr('id') === 'p1fault') {
      p1pointFaults += 1;
      p1totalFaults += 1;
      if (p1pointFaults === 2) {
        p2gameProgressor();
        p2pointsWon += 1;
        p1dblFaults += 1;
      }
    } else {
      console.log('error')
    }
  })
// End of Player 1 Button Commands

// Player 2 Button Commands
  $('button2').on('click', function(event) {
    var $this = $(this);
    if ($this.attr('id') === 'p2ace') {
      p2gameProgressor();
      p2aces += 1;
      p2pointsWon == 1;
    } else if ($this.attr('id') === 'p2winner') {
      p2gameProgressor();
      p2winners += 1;
      p2pointsWon += 1;
    } else if ($this.attr('id') === 'p2oppUFE') {
      p2gameProgressor();
      p1UFE += 1;
      p1UFE += 1;
    } else if ($this.attr('id') === 'p2fault') {
      p2pointFaults += 1;
      p2totalFaults += 1;
      if (p2pointFaults === 2) {
        p1gameProgressor();
        p1pointsWon += 1;
        p2dblFaults += 1;
      }
    } else {
      console.log('error')
    }
  })
// End of Player 2 Button Commands

})
