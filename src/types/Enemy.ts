export type Enemy = {
    id: number,
    name: string,
    experience: number,
    wielded_weapon_id: number,
    loot_table_id: number,

    level: number,
    health: number,
    max_health: number,
    mana: number,
    strength: number,
    intelligence: number,
    dexterity: number,
    vitality: number,

    armor: number,
    damage: [number, number],
}