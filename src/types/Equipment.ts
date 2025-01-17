export type Equipment = {
    id: number,
    name: string,
    type: EquipmentTypes,
    damage: [number, number],
    enchantments: [],
    
    health: number,
    mana: number,
    stamina: number,
    strength: number,
    intelligence: number,
    dexterity: number,
    vitality: number,
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