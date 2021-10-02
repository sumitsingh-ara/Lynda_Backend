const search = document.getElementById("search");
    search.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        data();
    }
});
async function data(){
    let inp = document.getElementById("search").value;
    let x = inp.toUpperCase();
    let data = await fetch (`http://localhost:3838/search/title/${x}`);
    let res = await data.json();
    displaySearch(res.searches);
}

////------------------------displaying the searched data------------------- ////
function displaySearch(prod){
    if(prod.length == 0){
        alert("No results found, Try searching with other keywords !!!");
        return
    }
    document.getElementById("empty").innerHTML = null;
    document.getElementById("footer-su").innerHTML=null;
    document.getElementById("footer-su").style.display = "none";
    
    prod.forEach(({video,by,name,wikipediaLink,date,title,time})=>{
            let appender = document.createElement("div");
            appender.setAttribute("class", "appender");


            let videoDiv = document.createElement("div");
            videoDiv.setAttribute("class", "video-play-su")
            let vids = document.createElement("iframe");
            vids.src = video
            vids.setAttribute("width", "100%");
            vids.setAttribute("height", "150");
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
            var generator = random(time)
            progress.setAttribute("value", generator);

            var a = generator;
            var b =time - generator;
            var count = 0;
            while (b >= 60) {
                b = b - 60;
                count++
            }
            var hours = document.createElement("p");
            hours.innerHTML = count;
            var minute = document.createElement("p")
            minute.textContent = b;
            console.log("Count", count)
            
            progress.setAttribute("max",time);
            durations.append(progress)
            durations2.append(hours, "-hours &-", minute, "-minutes left")
            bigDuration.append(durations, durations2, share)
            
            let videoContent = document.createElement("div");
            videoContent.setAttribute("id", "vid-content-su");


            let titles = document.createElement("p");
            titles.textContent =title;
            titles.setAttribute("class", "title-su")

            let names = document.createElement("a");
            let link = document.createTextNode(name)
            names.appendChild(link)

            names.href = wikipediaLink;
            names.setAttribute("class", "name-su")


            let dateDiv = document.createElement("div");
            dateDiv.setAttribute("class", "dateBox-su")
            let bys = document.createElement("p");
            bys.textContent = by;

            let dates = document.createElement("p");
            dates.setAttribute("class", "left-sus")
            dates.textContent =date;

            dateDiv.append(bys, dates);
            videoContent.append(titles, names, dateDiv, bigDuration)

            appender.append(videoDiv, videoContent)



            document.getElementById('empty').appendChild(appender);
    })
    
}