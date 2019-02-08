var health = 20;
function slap() {
  health--;
  update();
}

function update() {
  document.getElementById('health').innerText = health;
}

update();