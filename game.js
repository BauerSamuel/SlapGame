var jerry = {
  name: 'Jerry',
  health: 100,
  hits: 0,
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10
  },
  items: []
}

var items = {
  fire: {
    name: 'Fire',
    modifier: 2,
    description: 'It\'s not very effective...'
  },
  poison: {
    name: 'Poison',
    modifier: 3,
    description: 'A critical hit.'

  },
  armor: {
    name: 'Armor',
    modifier: -2,
    description: 'Protect'
  }
}
function slap(character) {
  character.hits++;
  character.health -= (1 + addMods());
  update(character);
}
function punch(character) {
  character.hits++;
  character.health -= (5 + addMods());
  update(character);
}
function kick(character) {
  character.hits++;
  character.health -= (10 + addMods());
  update(character);
}
function giveItem(itemName) {
  jerry.items.push(items[itemName])
}

function addMods() {
  let total = 0;
  for (let i = 0; i < jerry.items.length; i++) {
    var item = jerry.items[i];
    total += item.modifier;
  }
  return total;
}

function update(character) {
  document.getElementById('health').innerText = character.health;
  console.log('The health is ', character.health)
  document.getElementById('name').innerText = character.name;
  document.getElementById('hits').innerText = character.hits;
}

update(jerry);