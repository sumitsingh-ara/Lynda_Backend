var player = 0;
var count = 0;
var counter = 0;
var count1 = 0;
var counter1 = 0;

function chalo() {
  let showing = localStorage.getItem("player");
  showing = JSON.parse(showing);
  if (showing == 1) {
    function startTimer1() {
      var timeleft1 = 0;
      var hoursLeft1 = 10;

      if (count1 == 0) {
        if (count1 == 0) {
          var downloadTimer = setInterval(function set() {
            if (timeleft1 <= 0) {
              clearInterval(downloadTimer);
              alert("Congratulations you can enjoy your trial period!");
              showTrial1();
              count1++;
            } else {
              document.getElementById("trial").innerHTML =
                "Please wait " + timeleft1 + " seconds remaining";
            }
            timeleft1 -= 1;
          }, 1000);
        }

        function showTrial1() {
          var showTimer = setInterval(function show1() {
            if (hoursLeft1 <= 0) {
              clearInterval(showTimer);
              player = 2;
              localStorage.setItem("player", player);
              location.reload();
              counter1++;
              document.getElementById("trial").innerHTML = "Buy Pro Membership";

              count1++;
            } else {
              let mins = 0;
              var store = hoursLeft1;
              while (store >= 60) {
                store = store - 60;
                mins++;
              }
              let hr = 0;
              while (mins >= 60) {
                mins = mins - 60;
                hr++;
              }
              if (mins < 10) {
                mins = "0" + mins;
              }
              if (hr < 10) {
                hr = "0" + hr;
              }
              if (store < 10) {
                store = "0" + store;
              }
              document.getElementById("trial").innerHTML =
                "Trial left " + hr + " : " + mins + " : " + store;
            }
            hoursLeft1 -= 1;
          }, 1000);
        }
      } else if (count1 > 0) {
        document.getElementById("trial").innerHTML = "Buy Pro Membership";
        window.location.href = "../Subscription/subscription.html";
      }
    }
    startTimer1();
  }
}
chalo();

function startTimer() {
  let subShow = localStorage.getItem("player");
  subShow = JSON.parse(subShow);

  if (subShow <1) {
    // document.getElementById("trial").innerHTML =null;
    //document.getElementById("trial").innerHTML = "Buy Subscription";

    var timeleft = 3;
    var hoursLeft = 5;

    if (count == 0) {
      if (count == 0) {
        var downloadTimer = setInterval(function set() {
          if (timeleft <= 0) {
            clearInterval(downloadTimer);

            player++;
            localStorage.setItem("player", JSON.stringify(player));
            location.reload();
            showTrial();
            count++;
          } else {
            document.getElementById("trial").innerHTML =
              "Please wait " + timeleft + " seconds remaining";
          }
          timeleft -= 1;
        }, 1000);
      }

      function showTrial() {
        var showTimer = setInterval(function show() {
          if (hoursLeft <= 0) {
            clearInterval(showTimer);
            alert("Trial Ended");
            var player = 0;
            localStorage.setItem("player", player);
            location.reload();
            counter++;
            document.getElementById("trial").innerHTML = "Buy Pro Membership";

            count++;
          } else {
            let mins = 0;
            var store = hoursLeft;
            while (store >= 60) {
              store = store - 60;
              mins++;
            }
            let hr = 0;
            while (mins >= 60) {
              mins = mins - 60;
              hr++;
            }
            if (mins < 10) {
              mins = "0" + mins;
            }
            if (hr < 10) {
              hr = "0" + hr;
            }
            if (store < 10) {
              store = "0" + store;
            }
            document.getElementById("trial").innerHTML =
              "Trial left " + hr + " : " + mins + " : " + store;
          }
          hoursLeft -= 1;
        }, 1000);
      }
    } else if (counter > 0) {
      window.location.href = "../Subscription/subscription.html";
    }
  }
  else if(subShow > 1){
    document.getElementById("trial").innerHTML="Buy Pro Membership";
    window.location.href = "../Subscription/subscription.html";
  }
}