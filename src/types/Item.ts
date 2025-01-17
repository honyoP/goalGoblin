export type Item = {
    id: number,
    name: string,
    type: ItemTypes,
}

export enum ItemTypes {
    potion,
    scroll,
    ingredient,
}