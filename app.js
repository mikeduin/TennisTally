console.log("Sanity check");

$(document).ready(function() {
  var $this = $(this);
  var p1games = 0;
  var p2games = 0;
  var p1totalFaults = 0;
  var p2totalFaults = 0;
  var p1pointFaults = 0;
  var p2pointFaults = 0;
  var p1dblFaults = 0;
  var p2dblFaults = 0;
  var p1pointsWon = 0;
  var p2pointsWon = 0;
  var p1gamesWon = 0;
  var p2gamesWon = 0;
  var p1setsWon = 0;
  var p2setsWon = 0;
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
  var $lastplay = $('#lastplay');
  var $p1gamesTotal = $('#p1gamesTotal');
  var $p2gamesTotal = $('#p2gamesTotal');
  var $p1ptsTotal = $('#p1ptsTotal');
  var $p2ptsTotal = $('#p2ptsTotal');
  var $p1acesTotal = $('#p1acesTotal');
  var $p2acesTotal = $('#p2acesTotal');
  var $p1faultsTotal = $('#p1faultsTotal');
  var $p2faultsTotal = $('#p2faultsTotal');
  var $p1dblFaultsTotal = $('#p1dblFaultsTotal');
  var $p2dblFaultsTotal = $('#p2dblFaultsTotal');
  var $p1winnersTotal = $('#p1winnersTotal');
  var $p2winnersTotal = $('#p2winnersTotal');
  var $p1ufeTotal = $('#p1ufeTotal');
  var $p2ufeTotal = $('#p2ufeTotal');
  var $p1setsWon = $('#p1setsWon');
  var $p2setsWon = $('#p2setsWon');

// Firebase Code
  var myDataRef = new Firebase ('https://tennistally.firebaseio.com/');

  var playerOneRef = new Firebase ('https://tennistally.firebaseio.com/playerone');

  var playerTwoRef = new Firebase ('https://tennistally.firebaseio.com/playertwo');

  // Begin Firebase Name + Stat Linking
  $('#playerForm').on('submit', function(event) {
    var playerOneName = $('#playerOneName').val();
    var playerTwoName = $('#playerTwoName').val();
    var playerOneEmail = $('#playerOneEmail').val();
    var playerTwoEmail = $('#playerTwoEmail').val();
    playerOneRef.update({
      name: playerOneName,
      email: playerOneEmail,
    });
    playerTwoRef.update({
      name: playerTwoName,
      email: playerTwoEmail,
    });
    window.location.href('url(gamepage.html)');
  })

  playerOneRef.on('value', function(data) {
    var p1name = data.val().name;
    var p1gamesWon = data.val().gamesWon;
    var p1pointsWon = data.val().pointsWon;
    var p1aces = data.val().aces;
    var p1UFE = data.val().unforcedErrors;
    var p1faults = data.val().faults;
    var p1dblFaults = data.val().doubleFaults;
    var p1winners = data.val().winners;
    $p1scoreboard.text(p1name);
    $p1currGame.text(p1name);
    $p1gameAction.text(p1name);
    $p1summaryHead.text(p1name);
    $p1gamesTotal.text(p1gamesWon);
    $p1ptsTotal.text(p1pointsWon);
    $p1acesTotal.text(p1aces);
    $p1ufeTotal.text(p1UFE);
    $p1faultsTotal.text(p1faults);
    $p1dblFaultsTotal.text(p1dblFaults);
    $p1winnersTotal.text(p1winners);
  })

  playerTwoRef.on('value', function(data) {
    var p2name = data.val().name;
    var p2gamesWon = data.val().gamesWon;
    var p2pointsWon = data.val().pointsWon;
    var p2aces = data.val().aces;
    var p2UFE = data.val().unforcedErrors;
    var p2faults = data.val().faults;
    var p2dblFaults = data.val().doubleFaults;
    var p2winners = data.val().winners;
    $p2scoreboard.text(p2name);
    $p2currGame.text(p2name);
    $p2gameAction.text(p2name);
    $p2summaryHead.text(p2name);
    $p2gamesTotal.text(p2gamesWon);
    $p2ptsTotal.text(p2pointsWon);
    $p2acesTotal.text(p2aces);
    $p2ufeTotal.text(p2UFE);
    $p2faultsTotal.text(p2faults);
    $p2dblFaultsTotal.text(p2dblFaults);
    $p2winnersTotal.text(p2winners);
  })
  // End Firebase Name Linking

// End Firebase Code

// Active Set Selector Function
  function activeSetSelector(activeSet) {
    if (activeSet === 1) {
      $p1activeSet = $('#p1set1');
      $p2activeSet = $('#p2set1');
    } else if (activeSet === 2) {
      $p1activeSet = $('#p1set2');
      $p2activeSet = $('#p2set2');
      if (p1games === 0 && p2games === 0) {
        $p1activeSet.text(0);
        $p2activeSet.text(0);
      }
    } else if (activeSet === 3) {
      $p1activeSet = $('#p1set3');
      $p2activeSet = $('#p2set3');
      if (p1games === 0 && p2games === 0) {
        $p1activeSet.text(0);
        $p2activeSet.text(0);
      }
    } else if (activeSet === 4) {
      $p1activeSet = $('#p1set4');
      $p2activeSet = $('#p2set4');
      if (p1games === 0 && p2games === 0) {
        $p1activeSet.text(0);
        $p2activeSet.text(0);
      }
    } else if (activeSet === 5) {
      $p1activeSet = $('#p1set5');
      $p2activeSet = $('#p2set5');
      if (p1games === 0 && p2games === 0) {
        $p1activeSet.text(0);
        $p2activeSet.text(0);
      }
    } else {
      alert("The game has ended!")
    }
  };
// End Active Set Selector Function

// Scoring Progression Functions (one for each player)
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
            p1gamesWon += 1;
            activeSetSelector(activeSet);
            $p1activeSet.text(p1games);
            if (p1games === 7) {
              p1gamesWon += 1;
              activeSet += 1;
              p1setsWon += 1;
              $p1setsWon.text(p1setsWon);
              p1games = 0;
              p2games = 0;
              activeSetSelector(activeSet);
            }
          }
      } else {
        p1count = 0;
        $p2points.text(0);
        if (p1games < 7) {
            p1games +=1;
            p1gamesWon += 1;
            activeSetSelector(activeSet);
            $p1activeSet.text(p1games);
            if (p1games === 7) {
              p1gamesWon += 1;
              activeSet += 1;
              p1setsWon += 1;
              $p1setsWon.text(p1setsWon);
              p1games = 0;
              p2games = 0;
              activeSetSelector(activeSet);
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
            p2gamesWon += 1;
            activeSetSelector(activeSet);
            $p2activeSet.text(p2games);
            if (p2games === 7) {
              p2gamesWon += 1;
              activeSet +=1;
              p2setsWon += 1;
              $p2setsWon.text(p2setsWon);
              p2games = 0;
              p1games = 0;
              activeSetSelector(activeSet);
            }
          }
      } else {
        p2count = 0;
        $p1points.text(0);
        if (p2games < 7) {
            p2games +=1;
            p2gamesWon += 1;
            activeSetSelector(activeSet);
            $p2activeSet.text(p2games);
            if (p2games === 7) {
              p2gamesWon += 1;
              activeSet += 1;
              p2setsWon += 1;
              $p2setsWon.text(p2setsWon);
              p2games = 0;
              p1games = 0;
              activeSetSelector(activeSet);
            }
          }
        }
      };
    $p2points.text(p2count);
    p1pointFaults = 0;
    p2pointFaults = 0;
    }
// End Scoring Progression Functions

// Player 1 Button Commands

  $('button1').on('click', function(event) {
    var $this = $(this);
    var p1Name = $p1scoreboard.text();
    var p2Name = $p2scoreboard.text();
    if ($this.attr('id') === 'p1ace') {
      p1gameProgressor();
      p1aces += 1;
      p1pointsWon += 1;
      playerOneRef.update({
        aces: p1aces,
        pointsWon: p1pointsWon,
        gamesWon: p1gamesWon
      });
      $lastplay.text(p1Name + ' serves an Ace!');


    } else if ($this.attr('id') === 'p1winner') {
      p1gameProgressor();
      p1winners += 1;
      p1pointsWon += 1;
      playerOneRef.update({
        winners: p1winners,
        pointsWon: p1pointsWon,
        gamesWon: p1gamesWon
      });
      $lastplay.text(p1Name + ' takes the point with a winner.');
    } else if ($this.attr('id') === 'p1oppUFE') {
      p1gameProgressor();
      p2UFE += 1;
      p1pointsWon += 1;
      playerOneRef.update({
        pointsWon: p1pointsWon,
        gamesWon: p1gamesWon
      });
      playerTwoRef.update({
        unforcedErrors: p2UFE
      });
      $lastplay.text(p2Name + ' commits an unforced error. ' + p1Name + ' takes the point.' );
    } else if ($this.attr('id') === 'p1fault') {
      p1pointFaults += 1;
      p1totalFaults += 1;
      playerOneRef.update({
        faults: p1totalFaults
      });
      $lastplay.text(p1Name + " faults. It's his first fault of this point and he will serve again.");
      if (p1pointFaults === 2) {
        p2gameProgressor();
        p2pointsWon += 1;
        p1dblFaults += 1;
        playerOneRef.update({
          doubleFaults: p1dblFaults
        });
        playerTwoRef.update({
          pointsWon: p2pointsWon,
          gamesWon: p2gamesWon
        });
        $lastplay.text(p1Name + " double-faults! " + p2Name + " takes the point.");
      }
    } else {
      console.log('error')
    }
  })
// End of Player 1 Button Commands

// Player 2 Button Commands
  $('button2').on('click', function(event) {
    var $this = $(this);
    var p1Name = $p1scoreboard.text();
    var p2Name = $p2scoreboard.text();
    if ($this.attr('id') === 'p2ace') {
      p2gameProgressor();
      p2aces += 1;
      p2pointsWon == 1;
      playerTwoRef.update({
        aces: p2aces,
        pointsWon: p2pointsWon,
        gamesWon: p2gamesWon
      });
      $lastplay.text(p2Name + ' serves an Ace!');
    } else if ($this.attr('id') === 'p2winner') {
      p2gameProgressor();
      p2winners += 1;
      p2pointsWon += 1;
      playerTwoRef.update({
        winners: p2winners,
        pointsWon: p2pointsWon,
        gamesWon: p2gamesWon
      });
      $lastplay.text(p2Name + ' takes the point with a winner.');
    } else if ($this.attr('id') === 'p2oppUFE') {
      p2gameProgressor();
      p1UFE += 1;
      p2pointsWon += 1;
      playerOneRef.update({
        unforcedErrors: p1UFE
      });
      playerTwoRef.update({
        pointsWon: p2pointsWon,
        gamesWon: p2gamesWon
      });
      $lastplay.text(p1Name + ' commits an unforced error. ' + p2Name + ' takes the point.' );
    } else if ($this.attr('id') === 'p2fault') {
      p2pointFaults += 1;
      p2totalFaults += 1;
      playerTwoRef.update({
        faults: p2totalFaults
      });
      $lastplay.text(p2Name + " faults. It's his first fault of this point and he will serve again.");
      if (p2pointFaults === 2) {
        p1gameProgressor();
        p1pointsWon += 1;
        p2dblFaults += 1;
        playerTwoRef.update({
          doubleFaults: p2dblFaults
        });
        playerOneRef.update({
          pointsWon: p1pointsWon,
          gamesWon: p1gamesWon
        });
        $lastplay.text(p2Name + " double-faults! " + p1Name + " takes the point.");
      }
    } else {
      console.log('error')
    }
  })
// End of Player 2 Button Commands
  //
  // $('#toMatchSummary').on('click', function(event){
  //   window.location.href('url(matchsummary.html)')
  // })

})
