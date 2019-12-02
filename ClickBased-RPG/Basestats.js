var person = {
  name: "Lukas",
  age: 21
}

console.log("My name is " + JSON.stringify(person))
//console.log(`My name is ${JSON.stringify(person)}`)

let characterLevel = 5;
let startStatIds = [10, 10, 10, 20, 100, 50];
let [Str, Agi, Int, Sta, HP, MP] = startStatIds;


function getCharacterStats(level, stats) {
  //level 1 = 1
  //level 2 = 1,1
  //level 3 = 1,2
  let progress = (level-1)*0.1+1;
  return Math.round(stats*progress);
}

function showCharacterStats() {
  console.log("Character level = " + characterLevel)
  console.log(`Character level = ${characterLevel}`);
  console.log("Character level" + " = " + characterLevel);
  console.log("Str" + " " + getCharacterStats(characterLevel, Str))
  console.log("Agi" + " " + getCharacterStats(characterLevel, Agi))
  console.log("Int" + " " + getCharacterStats(characterLevel, Int))
  console.log("Sta" + " " + getCharacterStats(characterLevel, Sta))
  console.log("HP" + " " + getCharacterStats(characterLevel, HP))
  console.log("MP" + " " + getCharacterStats(characterLevel, MP))
}

showCharacterStats();
