 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      let contents_head = document.getElementsByClassName("dropdown-content");
      
      for ( let i = 0; i < contents_head.length; i++) {
        let showLists = contents_head[i];
        if (showLists.classList.contains("show")) {
          showLists.classList.remove("show");
        }
      }
    }
  };

async function display(){
  let data = await fetch("http://localhost:3838/inprogress");
  let res = await data.json();
  res = res.inprogress;
  showProducts(res)
}
display();
        
    function showProducts(myCourses) {
     
        let showProgress = document.getElementById("onProgresssu")
        showProgress.textContent = "In Progress-"+(myCourses.length);

        myCourses.forEach(function (product) {
            let appender = document.createElement("div");
            appender.setAttribute("class", "appender");


            let videoDiv = document.createElement("div");
            videoDiv.setAttribute("class", "video-play-su")
            let vids = document.createElement("iframe");
            vids.src = product.video
            vids.setAttribute("width", "100%");
            vids.setAttribute("height", "150");
            vids.setAttribute('allowFullScreen', '')
            vids.setAttribute("controls", "controls");
            vids.setAttribute("id", "videoPlayerNew");
            videoDiv.appendChild(vids)
            //progress bar

            let bigDuration = document.createElement("div")
            bigDuration.setAttribute("class", "flex-su")

            let share = document.createElement("button");
            share.textContent = "Share"
            share.setAttribute("class", "sharebtn-su")

            let durations = document.createElement("div");
            let durations2 = document.createElement("div");
            durations2.setAttribute("class", "flex-hour-su")
            durations.setAttribute("class", "durationBox-su")
            let progress = document.createElement("PROGRESS")
            function random(number) {
                return Math.floor(Math.random() * number)
            }
            var generator = random(product.time)
            progress.setAttribute("value", generator);

            var a = generator;
            var b = product.time - generator;
            var count = 0;
            while (b >= 60) {
                b = b - 60;
                count++
            }
            var hours = document.createElement("p");
            hours.innerHTML = count;
            var minute = document.createElement("p")
            minute.textContent = b;
           
         


            progress.setAttribute("max", product.time);
            durations.append(progress)
            durations2.append(hours, "-hours &-", minute, "-minutes left")
            bigDuration.append(durations, durations2, share)
            


            //vidcontent
            let videoContent = document.createElement("div");
            videoContent.setAttribute("id", "vid-content-su");


            let title = document.createElement("p");
            title.textContent = product.title;
            title.setAttribute("class", "title-su")

            let name = document.createElement("a");
            let link = document.createTextNode(product.name)
            name.appendChild(link)

            name.href = product.wikipediaLink;
            name.setAttribute("class", "name-su")


            let dateDiv = document.createElement("div");
            dateDiv.setAttribute("class", "dateBox-su")
            let by = document.createElement("p");
            by.textContent = product.by;

            let date = document.createElement("p");
            date.setAttribute("class", "left-sus")
            date.textContent = product.date;

            dateDiv.append(by, date);
            videoContent.append(title, name, dateDiv, bigDuration)

            appender.append(videoDiv, videoContent)



            document.getElementById('video-box-su').appendChild(appender);
        })

    }

    function topLists(){
        window.location.href = "http://localhost:3838/businessContent";
    }

    function linkedinHome(){
        window.location.href ="http://localhost:3838/home";
    }

        var count =0;

        function startTimer(){

            var timeleft = 3;
            var hoursLeft = 2592000;
            
            if(count == 0){
                if(count ==0){
                var downloadTimer = setInterval(function set() {
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                alert("Congratulations Trial Activated! You can enjoy 30 days of trial period!");
                showTrial();
                count++;
                } else {
                   
                document.getElementById("trial").innerHTML = "Please wait " +timeleft +" seconds remaining";
                }
                timeleft -= 1;
                }, 1000);
            }
            
            function showTrial() {
                var showTimer = setInterval(function show() {
                if(hoursLeft <= 0){
                clearInterval(showTimer);
                alert("Trial Ended")
                    
                document.getElementById('trial').innerHTML ="Buy Pro Membership"
                count++;
                } else {
                    let mins =0;
                    var store = hoursLeft;
                    while(store >= 60){
                        store=store-60;
                        mins++
                    }
                    let hr=0;
                    while (mins >= 60){
                        mins = mins -60;
                        hr++
                    }
                    if(mins < 10){
                        mins = "0"+mins
                    }
                    if(hr < 10){
                        hr = "0"+hr
                    }
                    if(store < 10){
                        store = "0"+store
                    }
                document.getElementById("trial").innerHTML ="Trial left "+ hr+" : "+mins+": "+store ;
                }
                hoursLeft -= 1;
                }, 1000);
            }
            }
            else{
                window.location.href ="http://localhost:3838/proMembership"
            }
        }
        


