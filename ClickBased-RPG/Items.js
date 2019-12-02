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





class wepQuality {
    quality(Copper,Iron,Gold,Platinum,Titanium,Mythril,Magical,Draconic) {
        Copper = (damage = 2);
        Iron = (damage = 3);
        Gold = (damage = 5);
        Platinum = (damage = 7);
        Titanium = (damage = 9);
        Mythril = (damage = 12);
        Magical = (damage = 15);
        Draconic = (damage = 20);
    }
}


class wepType {
    quality() {
        
    }
}

console.log(Copper);

class Item {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Weapon extends Item {
    constructor(quality, type, damage) {
        let baseDamage
        super();
        this.quality = quality;
        this.type = type;
        
        //set damage
        switch (this.quality) {
            case COPPER:
                baseDamage = 1;
                break;
            case IRON:
                baseDamage = 2    
        
            default:
                break;
        }
        
        this.damage = damage+baseDamage;
        
    }
}

var myWeapon = new Weapon(COPPER, SWORD, 12);

myWeapon.quality