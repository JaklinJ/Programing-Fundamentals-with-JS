function heroesOfCodeAndLogic(data) {

let numberOfHeroes = Number(data.shift());

let heroesList = {};

for (let i = 0; i < numberOfHeroes; i++) {
    let [hero, hp, mana] = data.shift().split(" ");
    hp = Number(hp);
    mana = Number(mana);
    heroesList[hero] = {hp , mana};
}

let token = data.shift();

while (token !== "End") {
    let [command, heroName, token2, token3] = token.split(" - ");

    switch (command) {
        case "CastSpell":
            let manaNeeded = Number(token2);
            let spell = token3;

            if (heroesList[heroName].mana >= manaNeeded) {
                heroesList[heroName].mana -= manaNeeded;
                console.log(`${heroName} has successfully cast ${spell} and now has ${heroesList[heroName].mana} MP!`)
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spell}!`);
            }
        break;
        case "TakeDamage":
            let damage = Number(token2);
            let attacker = token3;

            heroesList[heroName].hp -= damage;

            if (heroesList[heroName].hp > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesList[heroName].hp} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroesList[heroName];
            }
        break;
        case "Recharge":
            let amount = Number(token2);

            let heroMana = heroesList[heroName].mana;
            let result = heroMana + amount;

            if (result > 200) {
                result = 200;
                heroesList[heroName].mana = 200;
                let rechargedMana = result - heroMana;
                console.log(`${heroName} recharged for ${rechargedMana} MP!`);
            } else {
                heroesList[heroName].mana = result;
                console.log(`${heroName} recharged for ${amount} MP!`);
            }
        break;
        case "Heal":
            let amountHeal = Number(token2);
            
            let heroHp = heroesList[heroName].hp;
            let resultHp = heroHp + amountHeal;

            if (resultHp > 100) {
                resultHp = 100;
                heroesList[heroName].hp = resultHp;
                let rechargedHp = resultHp - heroHp;
                console.log(`${heroName} healed for ${rechargedHp} HP!`)
            } else {
                heroesList[heroName].hp = resultHp;
                console.log(`${heroName} healed for ${amountHeal} HP!`);
            }

        break;
}

token = data.shift();
}

    let resultArr = Object.entries(heroesList);

    for (const [key, value] of resultArr) {
        console.log(`${key}`);
        console.log(`  HP: ${value.hp}`);
        console.log(`  MP: ${value.mana}`);
    }

}
