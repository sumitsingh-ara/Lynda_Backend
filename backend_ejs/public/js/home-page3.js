async function datass(){
  let data = await fetch("http://localhost:3838/products");
  let x = await data.json();
  x= x.products;
  showProducts3(x)
}
datass();

function showProducts3(showPicks3) {
 
  showPicks3.forEach(function (product, n) {
    let parent3 = document.createElement("div");
    parent3.setAttribute("id", "parent3");
    parent3.setAttribute("class", "dummy3");
    parent3.onmouseenter = function () {
      document.getElementById(`contents3${n}`).style.height = "180px";
      document.getElementById(`videos3${n}`).style.height = "160px";
    };
    parent3.onmouseout = function () {
      document.getElementById(`contents3${n}`).style.height = "32px";
      document.getElementById(`videos3${n}`).style.height = "155px";
    };
    let videoBox3 = document.createElement("div");
    videoBox3.setAttribute("class", "videoBoxes3");
    // videoBox3.addEventListener("click", getData);
    // var courseKey = [];
    // function getData() {
    //   let checker3 = localStorage.getItem("courseData");
    //   checker3 = JSON.parse(checker3);
    //   for (key in checker3) {
    //     courseKey.push(checker3[key].name);
    //   }

    //   let inputs = {
    //     name: product.name,
    //     price: product.price,
    //     video: product.video,
    //     date: product.date,
    //     time: product.time,
    //     by: product.by,
    //     title: product.title,
    //   };
    //   if (courseKey.indexOf(product.name) != -1) {
    //     alert("This course is already added");
    //   } else {
    //     courseBag.push(inputs);
    //     localStorage.setItem("courseData", JSON.stringify(courseBag));
    //     window.location.href = "../Add_Cart/addToCart.html";
    //   }
    // }
    let vide3 = document.createElement("iframe");
    vide3.setAttribute("id", `videos3${n}`);
    vide3.setAttribute("width", "100%");
    vide3.setAttribute("height", "155px");
    vide3.setAttribute('allowFullScreen', '')
    
    vide3.src = product.video;
    videoBox3.appendChild(vide3);
    let content3 = document.createElement("div");
    content3.setAttribute("id", `contents3${n}`);
    let title3 = document.createElement("p");
    title3.textContent = product.title;
    let name3 = document.createElement("p");
    name3.textContent = `Name: ${product.name}`;
    let by3 = document.createElement("p");
    by3.textContent = product.by;
    let date3 = document.createElement("p");
    date3.textContent = `Released on:${product.date}`;
    content3.append(title3, name3, by3, date3);

    parent3.append(videoBox3, content3);
    document.getElementById("containerPOP3").append(parent3);
    //slider button adding funconalities
    var dum3 = document.getElementsByClassName("dummy3");
    let sliderbtn1 = document.getElementById("slbtns5");
    let sliderbtn2 = document.getElementById("slbtns6");
    //function for moving upwards
    var l = 0;
    sliderbtn2.onclick = function () {
      l++;
      for (var i of dum3) {
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
    sliderbtn1.onclick = function () {
      l--;
      for (var i of dum3) {
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

