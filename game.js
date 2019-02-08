var health = 100;
var name = 'Jerry';
var hits = 0;
function slap() {
  hits++;
  health--;
  update();
}
function punch() {
  hits++;
  health = health - 5;
  update();
}
function kick() {
  hits++;
  health = health - 10;
  update();
}
function update() {
  document.getElementById('health').innerText = health;
  document.getElementById('name').innerText = name;
  document.getElementById('hits').innerText = hits;
}

update();