// var health = 100;
// var name = 'Jerry';
// var hits = 0;

// var characters = {
//   name: 'Jerry',
//   health: 100,
//   attacks: {
//     slap: 1,
//     punch: 5,
//     kick: 10
//   }
// }
// var characterIndex = {
//   0: characters.name;
// }

var jerry = {
  name: 'Jerry',
  health: 100,
  hits: 0,
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10
  }
}



function slap(character) {
  character.hits++;
  character.health--;
  update(character);
}
function punch(character) {
  character.hits++;
  character.health = character.health - 5;
  update(character);
}
function kick(character) {
  character.hits++;
  character.health = character.health - 10;
  update(character);
}
function update(character) {
  document.getElementById('health').innerText = character.health;
  document.getElementById('name').innerText = character.name;
  document.getElementById('hits').innerText = character.hits;
}

update(jerry);