import { Character } from "../types/Character";
import { CombatResult, Turn } from "../types/Combat";
import { Enemy } from "../types/Enemy";

export const startCombat = (user: Character, enemy: Enemy) : CombatResult => {
    let turns: Turn[] = [];
    let turnId: number = 0;
    let userWin = false;
    enemy.health = enemy.max_health;
    while (user.health > 0 && enemy.health > 0)
    {
        let enemyDmg = 0;
        let userDmg = 0;
        if (user.dexterity > enemy.dexterity)
        {
            userDmg = rollDamage(user.damage);
            enemy.health -= userDmg;
            if (enemy.health <= 0)
                userWin = true;
            enemyDmg = rollDamage(enemy.damage);
            user.health -= enemyDmg;
        } else {
            enemyDmg = rollDamage(enemy.damage);
            user.health -= enemyDmg;
            userDmg = rollDamage(user.damage);
            enemy.health -= userDmg;
            if (enemy.health <= 0)
                userWin = true;
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
    console.log(enemy.health);
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

