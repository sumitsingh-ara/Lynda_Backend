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

  // var x = "<%- name %>";
  // // console.log(x); 
  
  var y = document.querySelector(".entry").textContent;
  
  async function dataFetch() {
    let data = await fetch("http://localhost:3838/products")
    let res = await data.json();
    let x = res.products;
    showProducts(x)
  }
  dataFetch();
  //data has been
  function showProducts(prod) {
    async function flag() {
      let userdata = await fetch(`http://localhost:3838/users/getone/${y}`)
      let data = await userdata.json();
      data = data.user
      if (data.payment_flag == false) {
        if (data.flag == 1) {
          //-------------------------------------------------------------slider 1--------------------------///
         prod.forEach(function (product, n) {
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
         let vide = document.createElement("iframe");
         vide.setAttribute('allowFullScreen', '')
         // vide.addEventListener("click", getData);
         vide.setAttribute("id", `videos${n}`);
         vide.setAttribute("width", "100%");
         vide.setAttribute("height", "155px");
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
        else {   //////////////----------------------if trial has exhausted or trial has not started------////
         //------------------slider 1-------------------------------///
          prod.forEach(function (product, n) {
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
            let vide = document.createElement("img");
            // vide.addEventListener("click", getData);
            vide.setAttribute("id", `videos${n}`);
            vide.setAttribute("width", "100%");
            vide.setAttribute("height", "155px");
            vide.src = product.image;
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
              }
            };
          });
        }
      } else {
        ////////when payment done///then only
        console.log("Permanent video show");
      }
    }
    flag();
  }



  function start() {
    async function flag() {
      let userdata = await fetch(`http://localhost:3838/users/getone/${y}`)
      let data = await userdata.json();
      data = data.user
      console.log(data.flag, "timer wala")
      let x = data.flag;
      //trial not activated
      if (x == 0) {
        async function demoUpdate() {
          await fetch(`http://localhost:3838/users/update/${y}`, {
            method: "PATCH",
            headers: { 'Content-type': "application/json" },
            body: JSON.stringify({
              flag: 1,
            })
          })
            .then(response => response.json())
        }
        demoUpdate();
        var timeleft = 3;
        var downloadTimer = setInterval(function set() {
          if (timeleft <= 0) {
            clearInterval(downloadTimer);
            alert("Congratualtion trial activated")
            location.reload();
          } else {
            document.getElementById("trial").innerHTML =
              "Please wait " + timeleft + "";
          }
          timeleft -= 1;
        }, 1000);
      }else{
        document.getElementById("trial").innerHTML = null;
        document.getElementById("trial").textContent = "Trial Exhausted";
        document.getElementById("trial-main-su").textContent ="Trial period Exhausted"
      }
    }
    flag();
  }
  //Below for updating patch to current user to flag

  function update() {

    async function demoUpdate() {
      await fetch(`http://localhost:3838/users/update/${y}`, {
        method: "PATCH",
        headers: { 'Content-type': "application/json" },
        body: JSON.stringify({
          flag: 2,
        })
      })
        .then(response => response.json())
    }

    demoUpdate();
  }
  //Trial timer runners 

  //checker for trial timers
  async function flag() {
      let userdata = await fetch(`http://localhost:3838/users/getone/${y}`)
      let data = await userdata.json();
      data = data.user
      console.log(data.flag, "timer me checking wala wala")
      let x = data.flag;
      if(x == 1) {
        showTrial();
      }
  }
  flag()


  function showTrial() {
    
    var hoursLeft = 20;
    var showTimer = setInterval(function show() {
      if (hoursLeft <= 0) {
        clearInterval(showTimer);
        alert("Trial Ended");
        update();
        location.reload();

        document.getElementById("trial").innerHTML = "Buy Pro Membership";
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




  
