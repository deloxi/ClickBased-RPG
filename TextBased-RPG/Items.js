let wepQuality = ['Copper', 'Iron', 'Gold', 'Platinum',
 'Titanium', 'Mythril', 'Magical', 'Draconic'];
let wepType = ['Sword', 'Greatsword', 'Staff', 'Wand',
 'Mace', 'Mauler', 'Axe', 'Cleaver', 'Shield',
  'Greatshield', 'Bow', 'Spear', 'Dagger'];

let itemPool = [];

for (let wepQualityIdx=0; wepQualityIdx<wepQuality.length; wepQualityIdx++) {
 
    for (let wepTypeIdx=0; wepTypeIdx<wepType.length;wepTypeIdx++) {
        itemPool.push(wepQuality[wepQualityIdx] + ' ' + wepType[wepTypeIdx]); 
    }
}

for (let i = 0; i < itemPool.length; i++) {
    console.log(itemPool[i]);

}



// base find
// base stats
// 
// learn objects
// learn classes



let wepQ = {
    Copper: {
       baseStats: 2,
       baseFind: 90 
    },
    Iron: {
        baseStats: 3,
        baseFind: 9 
    }
}

console.log(Object.keys(wepQ).length)