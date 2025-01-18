import { Character } from "../types/Character";
import { Enemy } from "../types/Enemy";

export const startCombat = (user: Character, enemy: Enemy) => {
    let turns: Turn[] = [];
    while (user.health > 0 || enemy.health > 0)
    {
        if (user.dexterity > enemy.dexterity)
        {
            enemy.health = evaluateTurn(user.damage, enemy.health);
            if (enemy.health <= 0)
                break;
            user.health = evaluateTurn(enemy.damage, user.health);
        } else {
            user.health = evaluateTurn(enemy.damage, user.health);
            if (user.health <= 0)
                break;
            enemy.health = evaluateTurn(user.damage, enemy.health);
        }
    }

    return {
        turns: turns,
    };
}

const evaluateTurn = (
    attackerDmg: [number, number],
    defHp: number,
) => {
    const finUdmg = rollDamage(attackerDmg);
    return defHp - finUdmg;
}

const rollDamage = (dmg: [number, number]) => {
    let result = 0;
    for (let i = 0; i < dmg[0]; i++)
    {
        result += Math.floor(Math.random() * dmg[1]);
    }
    return result;
}

type Turn = {
    id: number,
    user_health: number,
    enemy_health: number,
    user_dmg: number,
    enemy_dmg: number,
}