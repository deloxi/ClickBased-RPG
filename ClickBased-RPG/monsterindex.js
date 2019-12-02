/*
class Monster {
    name = "Basename".Monster;
    stats = baseStats; 
    rarity = baseRarity;
    lootDrops = baselootDrops;
    ExpGain = baseExpGain;
};

    

class YoungMonster {
    name = Young.Monster;
    stats = baseStats*0.7; 
    rarity = baseRarity*0.7;
    lootDrops = baselootDrops*1.2;
    ExpGain = baseExpGain*0.8;
};

class ElderMonster {
    name = Elder.Monster;
    stats = baseStats*1.5;
    rarity = baseRarity*0.3;
    lootDrops = baselootDrops*1.5;
    ExpGain = baseExpGain*1.2;
};

class PrimalMonster extends MonsterAge {
    name = Primal.Monster;
    stats = baseStats*2; 
    rarity = baseRarity*0.1;
    lootDrops = baselootDrops*2;
    ExpGain = baseExpGain*1.5;
};

*/

monsterStats = {
    Monster: {
        stats = 1,
        rarity = 11-70,     // 60%
        lootDrops = 1,
        ExpGain = 1
    },
    YoungMonster: {
        name = "Young Monster",
        stats = 0.7,
        rarity = 1-10,      // 10%
        lootDrops = 1.2,
        ExpGain = 0.8
    },
    ElderMonster: {
        name = "Elder Monster",
        stats = 1.5,
        rarity = 76-95,     //20%
        lootDrops = 1.5,
        ExpGain = 1.2
    },
    PrimalMonster: {
        name = "Primal Monster",
        stats = 2,
        rarity = 96-100,    // 5%
        lootDrops = 2,
        ExpGain = 1.5
    }
}

class Monsters {
    constructor(name, stats, rarity, lootDrops, ExpGain) {
        this.name = name;
        this.stats = stats;
        this.rarity = rarity;
        this.lootDrops = lootDrops;
        this.ExpGain = ExpGain
    }

    getStats() {
        return this.stats;
    }
}

class YoungMonster extends Monsters {
    getStats() {
        super.getStats() * monsterStats.YoungMonster.stats;
    }
}



/* var monster = getANewMonster(allMonsterArray)

getNewMonster()
    AllMonsterThatCanSpawnInThisAreaArray 3
    1 33% 1-33
    2 45% 34-78
    3 22% 79-100

    i = random(100) //2 = Goblin

    SpawnMonster(Goblin)
        GetMonsterAgeSpawnrate()
            q = random(100)
            For each crit in MonsterStats
                is q > crit.rarity*100


*/



/*
randseed

 function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
*/