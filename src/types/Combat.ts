export type Turn = {
    id: number,
    user_health: number,
    enemy_health: number,
    user_dmg: number,
    enemy_dmg: number,
}

export type CombatResult = {
    user_win: boolean,
    turns: Turn[]
}