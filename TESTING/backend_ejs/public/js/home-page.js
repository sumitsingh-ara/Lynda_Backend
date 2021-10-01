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


  
