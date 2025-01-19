import { CharacterStats } from "./Character"

export type Equipment = {
    id: number,
    name: string,
    rarity: rarity,
    item_level: number,
    type: EquipmentTypes,
    damage: [number, number],
    damage_type: DamageType,
    enchantments: [] | null,
    effect: EquipmentEffect[]
}

export enum DamageType {
    physical = "physical",
    magical = "magical",
}

export enum rarity {
    very_common,
    common,
    uncommon,
    rare,
    epic,
    legendary
}

export enum EquipmentTypes {
    head = "head",
    torso = "torso",
    shoulders = "shoulders",
    gloves = "gloves",
    pants = "pants",
    boots = "boots",
    ring = "ring",
    shield = "shield",
    dagger = "dagger",
    sword = "sword",
    staff = "staff",
    bow = "bow",
}

export type EquipmentEffect = {
    stat: CharacterStats,
    buff: number | null,
    debuff: number | null,
}