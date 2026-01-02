let box = document.getElementById("box");

let velocity = 0;
let gravity = -0.5;
let isJumping = false;
let position = 0;

function jump() {
  if (!isJumping) {
    velocity = 10;     // jump strength
    isJumping = true;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jump();
  }
});

function gameLoop() {
  velocity += gravity;
  position += velocity;

  if (position <= 0) {
    position = 0;
    velocity = 0;
    isJumping = false;
  }

  box.style.bottom = position + "px";
  requestAnimationFrame(gameLoop);
}

gameLoop();

