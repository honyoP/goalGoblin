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
    head_id: number,
    torso_id: number,
    shoulders_id: number,
    gloves_id: number,
    pants_id: number,
    boots_id: number,
    ring_id: number,
    ring2_id: number,
    primaryHand_id: number,
    secondHand_id: number,
}

export type Backpack = {
    name: string,
    max_capacity: number,
    total_items: number,
    item_ids: number[],
    equipment_ids: number[],
}