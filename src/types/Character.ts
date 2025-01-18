import { Equipment } from "./Equipment"
import { Item } from "./Item"

export type Character = {
    name: string,
    level: number,
    experience: number,
    skill_points: number,
    shekels: number,

    health: number,
    max_health: number,
    mana: number,
    max_mana: number,
    stamina: number,
    max_stamina: number,

    strength: number,
    intelligence: number,
    dexterity: number,
    vitality: number,

    armor: number,
    damage: [number, number],

    total_time_spent: string,
    total_monsters_slain: number,
    total_shekels_earned: number,
    total_items_earned: number,
    total_quests_done: number,
}

export type EquipedGear = {
    head: Equipment,
    torso: Equipment,
    shoulders: Equipment,
    gloves: Equipment,
    pants: Equipment,
    boots: Equipment,
    ring: Equipment,
    ring2: Equipment,
    primaryHand: Equipment,
    secondHand: Equipment,
}

export type Backpack = {
    name: string,
    max_capacity: number,
    total_items: number,
    items: Item[],
    equipment: Equipment[],
}