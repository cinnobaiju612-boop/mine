function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

function moveNoButton() {
    const btn = document.getElementById("noBtn");
    btn.style.position = "absolute";
    btn.style.top = Math.random() * 400 + "px";
    btn.style.left = Math.random() * 400 + "px";
}

function fireworks() {
    for (let i = 0; i < 30; i++) {
        let spark = document.createElement("div");
        spark.innerHTML = "✨";
        spark.style.position = "fixed";
        spark.style.left = "50%";
        spark.style.top = "50%";
        document.body.appendChild(spark);

        let x = (Math.random() - 0.5) * 600;
        let y = (Math.random() - 0.5) * 600;

        spark.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], { duration: 1000 });

        setTimeout(() => spark.remove(), 1000);
    }
}

const text = "You are my today and all of my tomorrows. I love you endlessly 💖";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

if (document.getElementById("typingText")) {
    typeWriter();
}
