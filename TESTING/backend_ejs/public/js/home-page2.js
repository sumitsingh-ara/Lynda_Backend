async function datass(){
  let data = await fetch("http://localhost:3838/products");
  let x = await data.json();
  x= x.products;
  showProducts2(x)
}
datass();
function showProducts2(showPicks2) {
  
  showPicks2.forEach(function (product, n) {
    let parent2 = document.createElement("div");
    parent2.setAttribute("id", "parent2");
    parent2.setAttribute("class", "dummy2");
    parent2.onmouseenter = function () {
      document.getElementById(`contents2${n}`).style.height = "180px";
      document.getElementById(`videos2${n}`).style.height = "160px";
    };
    parent2.onmouseout = function () {
      document.getElementById(`contents2${n}`).style.height = "32px";
      document.getElementById(`videos2${n}`).style.height = "155px";
    };
    let videoBox2 = document.createElement("div");
    videoBox2.setAttribute("class", "videoBoxes2");
   
    
    let vide2 = document.createElement("img");
    vide2.setAttribute("id", `videos2${n}`);
    vide2.setAttribute("width", "100%");
    vide2.setAttribute("height", "155px");
    var a = localStorage.getItem("player")
    a = JSON.parse(a);
    if(a >0){
      vide2.setAttribute("controls", "controls");
    }
    vide2.src = product.image;
    videoBox2.appendChild(vide2);
    let content2 = document.createElement("div");
    content2.setAttribute("id", `contents2${n}`);
    let title2 = document.createElement("p");
    title2.textContent = product.title;
    let name2 = document.createElement("p");
    name2.textContent = `Name: ${product.name}`;
    let by2 = document.createElement("p");
    by2.textContent = product.by;
    let date2 = document.createElement("p");
    date2.textContent = `Released on:${product.date}`;
    content2.append(title2, name2, by2, date2);

    parent2.append(videoBox2, content2);
    document.getElementById("containerPOP2").append(parent2);
    //slider button adding funconalities
    var dum2 = document.getElementsByClassName("dummy2");
    let sliderbtn3 = document.getElementById("slbtns3");
    let sliderbtn4 = document.getElementById("slbtns4");
    //function for moving upwards
    var l = 0;
    sliderbtn4.onclick = function () {
      l++;
      for (var i of dum2) {
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
        }if(l>=4){
          i.style.left = "0px"
          l=0;
        }
      }
    };
    //function for moving downwards
    sliderbtn3.onclick = function () {
      l--;
      for (var i of dum2) {
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
showProducts2();
