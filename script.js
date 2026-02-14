/* MUSIC CONTROL */
const music=document.getElementById("music");
const overlay=document.getElementById("tapToStart");

overlay.addEventListener("click",()=>{
overlay.style.opacity=0;
setTimeout(()=>overlay.remove(),1000);

music.volume=0;
music.play();

let fade=setInterval(()=>{
if(music.volume<0.6) music.volume+=0.02;
else clearInterval(fade);
},120);
});

/* SCROLL VOLUME REACTION */
let lastScroll=0;
window.addEventListener("scroll",()=>{
let now=window.scrollY;
let speed=Math.abs(now-lastScroll);

music.volume=Math.max(0.15,0.6-(speed/1000));
lastScroll=now;
});

/* PARALLAX DEPTH */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".hero").forEach(el=>{
el.style.backgroundPositionY=window.scrollY*0.4+"px";
});
});

/* IMAGE TILT */
document.querySelectorAll(".person img, .gallery img").forEach(img=>{
img.addEventListener("mousemove",e=>{
const x=(e.offsetX/img.clientWidth-0.5)*10;
const y=(e.offsetY/img.clientHeight-0.5)*10;
img.style.transform=`rotateX(${-y}deg) rotateY(${x}deg) scale(1.05)`;
});
img.addEventListener("mouseleave",()=>{
img.style.transform="rotateX(0) rotateY(0) scale(1)";
});
});
const wedding=new Date("May 18, 2026 10:00:00").getTime();

setInterval(()=>{
let now=new Date().getTime();
let d=wedding-now;

document.getElementById("days").innerText=Math.floor(d/86400000);
document.getElementById("hours").innerText=Math.floor(d%86400000/3600000);
document.getElementById("minutes").innerText=Math.floor(d%3600000/60000);
document.getElementById("seconds").innerText=Math.floor(d%60000/1000);
},1000);
