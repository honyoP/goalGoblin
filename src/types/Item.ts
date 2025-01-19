import { CharacterStats } from "./Character"

export type Item = {
    id: number,
    name: string,
    effect: Effect[]
    type: ItemTypes,
}

export enum ItemTypes {
    potion,
    scroll,
    ingredient,
}

type Effect = {
    stat: CharacterStats,
    buff: number | null,
    debuff: number | null,
}