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
  // var $p1set1 = $('#p1set1');
  var activeSet = 1;
  // var $p1activeSet = $('#p1set' + activeSet + '')



  $('button1').on('click', function(event) {
    var $this = $(this);
    if ($this.attr('id') === 'p1ace') {
      var p1pointScore = $p1points.text();
      var count = parseInt(p1pointScore);
      if (count === 0 || count === 15) {
        count +=15
      } else if (count === 30) {
        count +=10
      } else if (count === 40) {
        count = 0;
        if (p1games < 7) {
          p1games +=1;
          console.log(activeSet);
          // console.log($p1activeSet);
          if (activeSet === 1) {
            $p1activeSet = $('#p1set1')
          } else if (activeSet === 2) {
            $p1activeSet = $('#p1set2')
          } else if (activeSet === 3) {
            $p1activeSet = $('#p1set3')
          } else if (activeSet === 4) {
            $p1activeSet = $('#p1set4')
          } else if (activeSet === 5) {
            $p1activeSet = $('#p1set5')
          } else if (activeSet === 6) {
            $p1activeSet = $('#p1set6')
          } else {
            $p1activeSet = $('#p1set7')
          }
          $p1activeSet.text(p1games);
        } else if (p1games === 7) {
          activeSet +=1;
          p1games = 1;
          console.log(p1games);
          console.log(activeSet);
          if (activeSet === 1) {
            $p1activeSet = $('#p1set1')
          } else if (activeSet === 2) {
            $p1activeSet = $('#p1set2')
          } else if (activeSet === 3) {
            $p1activeSet = $('#p1set3')
          } else if (activeSet === 4) {
            $p1activeSet = $('#p1set4')
          } else if (activeSet === 5) {
            $p1activeSet = $('#p1set5')
          } else if (activeSet === 6) {
            $p1activeSet = $('#p1set6')
          } else {
            $p1activeSet = $('#p1set7')
          }
          $p1activeSet.text(p1games);
        }
      } else (
        console.log('end')
      )
      ;
      $p1points.text(count)
    } else if ($this.attr('id') === 'p1winner') {
      var p1pointScore = $p1points.text();
      var count = parseInt(p1pointScore);
      if (count === 0 || count === 15) {
        count +=15
      } else if (count === 30) {
        count +=10
      } else (count = 0);
      $p1points.text(count)
    } else if ($this.attr('id') === 'p1oppUFE') {
      var p1pointScore = $p1points.text();
      var count = parseInt(p1pointScore);
      if (count === 0 || count === 15) {
        count +=15
      } else if (count === 30) {
        count +=10
      } else (count = 0);
      $p1points.text(count)
    } else if ($this.attr('id') === 'p1fault') {
      console.log('clicking p1fault');
    }

  })


})
