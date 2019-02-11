//setTimeout()

var bear = {
  name: 'Bear',
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
  yell: {
    name: 'Yell',
    modifier: 2,
    description: 'It\'s not very effective.'
  },
  fire: {
    name: 'Fire',
    modifier: 3,
    description: 'How annoying.'

  },
  honey: {
    name: 'Honey',
    modifier: -2,
    description: 'The bear is fast asleep'
  }
}

function returnImg() {
  document.getElementById('image').innerHTML = `<img src="assets/images/Man_Bear.png" />`
}
returnImg();

function stickJab(character) {
  character.hits++;
  if (character.health > 0 && character.health < 101) {
    character.health -= (1 + addMods());
  }
  else {
    character.health = 0;
  }
  document.getElementById('image').innerHTML = `<img src="assets/images/ManPokesWStick.png" />`
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
  document.getElementById('image').innerHTML = `<img src="assets/images/ManPokesWRake.png" />`
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
  document.getElementById('image').innerHTML = `<img src="assets/images/ManPokesWShovel.png" />`
  update(character);
}
function giveItem(itemName) {
  bear.items.push(items[itemName])
}

function addMods() {
  let total = 0;
  for (let i = 0; i < bear.items.length; i++) {
    var item = bear.items[i];
    total += item.modifier;
  }
  return total;
}

function update(character) {
  if (character.health > 100) {
    character.health = 100;
    document.getElementById('health').innerText = character.health;
    console.log('The health is ', character.health)
    document.getElementById('name').innerText = character.name;
    document.getElementById('hits').innerText = character.hits;
  }
  else if (character.health < 1) {
    character.health = 0;
    alert('The bear awakens in anger. You shouldn\'t have poked the bear! You are now dead.');
    let elements = document.getElementsByClassName("action")
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = true;
    }
    document.getElementById('image').innerHTML = `<img src="assets/images/Mix.png" />`
    document.getElementById('health').innerText = character.health;
    console.log('The health is ', character.health)
    document.getElementById('name').innerText = character.name;
    document.getElementById('hits').innerText = character.hits;

  } else {

    document.getElementById('health').innerText = character.health;
    console.log('The health is ', character.health)
    document.getElementById('name').innerText = character.name;
    document.getElementById('hits').innerText = character.hits;
  }
}
function reset() {
  var txt;
  if (confirm("Start over and do things right?")) {
    txt = "Sure, I won't poke the bear this time!";
    bear.health = 100;
    bear.hits = 0;
    bear.items = [];
    let elements = document.getElementsByClassName("action")
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = false;
    }
    returnImg();
    update(bear);
  } else {
    txt = "Cancel!";
  }
}

update(bear);
