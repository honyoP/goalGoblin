import { Character } from "../types/Character";
import { Enemy } from "../types/Enemy";

export const startCombat = (user: Character, enemy: Enemy) => {
    let turns: Turn[] = [];
    let turnId: number = 0;
    let userWin = false;
    while (user.health > 0 || enemy.health > 0)
    {
        let enemyDmg = 0;
        let userDmg = 0;
        if (user.dexterity > enemy.dexterity)
        {
            userDmg = rollDamage(user.damage);
            enemy.health -= userDmg;
            if (enemy.health <= 0)
            {
                userWin = true;
                break;
            }
            enemyDmg = rollDamage(enemy.damage);
            user.health -= enemyDmg;
        } else {
            enemyDmg = rollDamage(enemy.damage);
            user.health -= enemyDmg;
            if (user.health <= 0)
                break;
            userDmg = rollDamage(user.damage);
            enemy.health -= userDmg;
        }
        let turn: Turn = {
            id: turnId++,
            enemy_dmg: enemyDmg,
            enemy_health: enemy.health,
            user_dmg: userDmg,
            user_health: user.health
        }
        turns.push(turn);
    }

    return {
        user_win: userWin,
        turns: turns,
    };
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