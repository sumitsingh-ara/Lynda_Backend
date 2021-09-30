function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let contents_head = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < contents_head.length; i++) {
      let showLists = contents_head[i];
      if (showLists.classList.contains("show")) {
        showLists.classList.remove("show");
      }
    }
  }
};

var player = 0;

var count = 0;
var counter = 0;
var count1 = 0;
var counter1 = 0;
// function dikhao(){
// let subShow = localStorage.getItem("player");
//   subShow = JSON.parse(subShow);

//   if(subShow >1){
//    // document.getElementById("trial").innerHTML =null;
//     document.getElementById("trial").innerHTML = "Buy Subscription"

//   }
// }

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

//Caraousel Running;
x = object data

function showProducts() {
  var courseBag = [];
  showPicks.forEach(function (product, n) {
    let parent = document.createElement("div");
    parent.setAttribute("id", "parent");
    parent.setAttribute("class", "dummy");
    parent.onmouseenter = function () {
      document.getElementById(`contents${n}`).style.height = "180px";
      document.getElementById(`videos${n}`).style.height = "160px";
    };
    parent.onmouseout = function () {
      document.getElementById(`contents${n}`).style.height = "32px";
      document.getElementById(`videos${n}`).style.height = "155px";
    };
    let videoBox = document.createElement("div");
    videoBox.setAttribute("class", "videoBoxes");

    var courseKey = [];
    function getData() {
      let checker = localStorage.getItem("courseData");
      checker = JSON.parse(checker);
      for (key in checker) {
        courseKey.push(checker[key].name);
      }

      let inputs = {
        name: product.name,
        price: product.price,
        video: product.video,
        date: product.date,
        time: product.time,
        by: product.by,
        title: product.title,
      };
      if (courseKey.indexOf(product.name) != -1) {
        alert("This course is already added");
      } else {
        courseBag.push(inputs);
        localStorage.setItem("courseData", JSON.stringify(courseBag));
        window.location.href = "../Add_Cart/addToCart.html"
      }
    }
    let vide = document.createElement("VIDEO");
    vide.addEventListener("click", getData);
    vide.setAttribute("id", `videos${n}`);
    vide.setAttribute("width", "100%");
    vide.setAttribute("height", "155px");
    var a = localStorage.getItem("player");
    a = JSON.parse(a);
    if (a == 1) {
      vide.setAttribute("controls", "controls");
    }

    vide.src = product.video;
    videoBox.appendChild(vide);
    let content = document.createElement("div");
    content.setAttribute("id", `contents${n}`);
    let title = document.createElement("p");
    title.textContent = product.title;
    let name = document.createElement("p");
    name.textContent = `Name: ${product.name}`;
    let by = document.createElement("p");
    by.textContent = product.by;
    let date = document.createElement("p");
    date.textContent = `Released on:${product.date}`;
    content.append(title, name, by, date);

    parent.append(videoBox, content);
    document.getElementById("containerPOP").append(parent);
    //slider button adding funconalities
    var dum = document.getElementsByClassName("dummy");
    let sliderbtn1 = document.getElementById("slbtns1");
    let sliderbtn2 = document.getElementById("slbtns2");
    //function for moving upwards
    var l = 0;
    sliderbtn2.onclick = function () {
      l++;
      for (var i of dum) {
        if (l == 0) {
          i.style.left = "-300px";
        }
        if (l == 1) {
          i.style.left = "-740px";
        }
        if (l == 2) {
          i.style.left = "-1480px";
        }
        if (l == 3) {
          i.style.left = "-2220px";
        }
        if (l >= 4) {
          i.style.left = "0px";
          l = 0;
        }
      }
    };
    //function for moving downwards
    sliderbtn1.onclick = function () {
      l--;
      for (var i of dum) {
        if (l == 0) {
          i.style.left = "0px";
        }
        if (l == 1) {
          i.style.left = "-740px";
        }
        if (l == 2) {
          i.style.left = "-1480px";
        }
        if (l == 3) {
          i.style.left = "-2220px";
        }
        if (l >= 4) {
          l = 0;
        }
      }
    };
  });
}
showProducts();

function linkedinHome() {
  window.location.href = "./home.html";
}
function topLists() {
  window.location.href = "../Business_Content/businessContent.html";
}

function nameDisplay() {
  var fetchingName = localStorage.getItem("userID");
  fetchingName = JSON.parse(fetchingName);
  //console.log(fetchingName);
  var show = localStorage.getItem("Name");
  //console.log(show);

  fetchingName.forEach(function (prod) {
    if (prod.userName == show) {
      document.getElementById(
        "nameDisplay"
      ).textContent = `${prod.First_name},`;
      document.getElementById("nameDisplay2").textContent = prod.First_name;
      console.log(prod.First_name);
    }
  });
}
nameDisplay();
