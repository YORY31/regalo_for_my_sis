function moveRandomB(botton){
    botton.style.position = "absolute";
    botton.style.top = Math.floor(Math.random() * 100 ) +"%";
    botton.style.left = Math.floor(Math.random() * 100 ) +"%";
}

const moveRandom = document.querySelector('#move-random');

moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomB(e.target);
})