export type Equipment = {
    id: number,
    name: string,
    type: EquipmentTypes,
    damage: [number, number],
    enchantments: [] | null,
    
    health: number | null,
    mana: number | null,
    stamina: number | null,
    strength: number | null,
    intelligence: number | null,
    dexterity: number | null,
    vitality: number | null,
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