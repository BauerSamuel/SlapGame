var jerry = {
  name: 'Jerry',
  health: 100,
  hits: 0,
  attacks: {
    stickJab: 1,
    rakeJab: 5,
    shovelSmack: 10
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
function stickJab(character) {
  character.hits++;
  if (character.health > 0 && character.health < 101) {
    character.health -= (1 + addMods());
  }
  else {
    character.health = 0;
  }
  update(character);
}
function rakeJab(character) {
  character.hits++;
  if (character.health > 4) {
    character.health -= (5 + addMods());
  }
  else {
    character.health = 0;
  }
  update(character);
}
function shovelSmack(character) {
  character.hits++;
  if (character.health > 9) {
    character.health -= (10 + addMods());
  }
  else {
    character.health = 0;
  }
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
  if (character.health > 100) {
    character.health = 100;
  }
  document.getElementById('health').innerText = character.health;
  console.log('The health is ', character.health)
  document.getElementById('name').innerText = character.name;
  document.getElementById('hits').innerText = character.hits;
}

update(jerry);