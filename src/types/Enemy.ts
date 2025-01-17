import { Equipment } from "./Equipment"
import { LootTable } from "./LootTable"

export type Enemy = {
    id: number,
    name: string,
    wielded_weapon: Equipment,
    loot_table: LootTable,

    level: number,
    health: number,
    mana: number,
    strength: number,
    intelligence: number,
    dexterity: number,
    vitality: number,
}