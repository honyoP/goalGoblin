export type LootTable = {
    id: number,
    loot: Loot[], 
}

export type Loot = {
    chance: number,
    equipmentId: number | null,
    itemId: number | null,
}