const birthdaydate = "13 june 2024";
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


function birthdaycount(){
    const bdate = new Date(birthdaydate);
    const todaysdate = new Date();
    console.log(todaysdate);

    const tseconds = Math.floor(bdate - todaysdate)/1000;
    const tdays = Math.floor(tseconds/3600/24);
    const thours = Math.floor(todaysdate/3600)%24;
    const tmin = Math.floor(tseconds/60)%60;
    const tsec = Math.floor(tseconds)%60;

days.innerHTML=tdays
hours.innerHTML=thours
minutes.innerHTML = tmin
seconds.innerHTML = tsec


}
birthdaycount()
setInterval(birthdaycount,1000)


function celerate(){
    const balloon = document.createElement("div");
    const balloon1 = document.createElement("div")
    const heart =document.createElement("div")
    balloon.classList.add("balloon")
    balloon.classList.add("balloon1")
    balloon.classList.add("heart")
    balloon.style.left = Math.random()*100+"vw";
    balloon.style.animationDuration=Math.random()*2+3;
    balloon.innerText="Happy Dday Bro"
    document.body.appendChild(balloon);
    setTimeout(()=>{
        balloon.remove()
    },5000)
}

setInterval(celerate,3000)