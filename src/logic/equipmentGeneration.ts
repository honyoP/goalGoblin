import { CharacterStats } from "../types/Character";
import { DamageType, Equipment, EquipmentEffect, EquipmentTypes, rarity } from "../types/Equipment";

export default function GenerateEquipment(itemLevel: number, type: EquipmentTypes) {
    const equipmentRarity = GenerateRarity();
    const result: Equipment = {
        id: 0,
        name: GenerateName(type),
        rarity: equipmentRarity,
        item_level: itemLevel,
        type: type,
        damage: GenerateDamage(type),
        damage_type: DamageType.physical,
        enchantments: null,
        effect: GenerateEffects(itemLevel, equipmentRarity)
    }
    return result;
}
function GenerateName(type: EquipmentTypes) {
    return type + " of " + names[Math.floor(Math.random() * names.length)];
}
const names = ["Gooning", "Firebending", "Waterwalking", "Earthly power", "Nonsense", "Void shattering"]
function GenerateDamage(type: EquipmentTypes) : [number, number] {
    switch (type) {
        case EquipmentTypes.dagger:
        case EquipmentTypes.head:
        case EquipmentTypes.torso:
        case EquipmentTypes.shoulders:
        case EquipmentTypes.gloves:
        case EquipmentTypes.pants:
        case EquipmentTypes.boots:
            return [1, 4];
        case EquipmentTypes.ring:
            return [0, 0];
        case EquipmentTypes.shield:
            return [1, 6];
        case EquipmentTypes.sword:
            return [1, 8];
        case EquipmentTypes.staff:
            return [1, 8];
        case EquipmentTypes.bow:
            return [1, 6];
    }
}

function GenerateEffects(itemLevel: number, itemRarity: rarity) {
    const result: EquipmentEffect[] = [];
    for (let index = 0; index < itemRarity + 1; index++) {
        const stat:CharacterStats = Math.floor(Math.random() * (Object.keys(CharacterStats).length / 2));
        let buff: number;
        switch (itemRarity) {
            case rarity.very_common:
                buff = 1;
                break;
            case rarity.common:
                buff = 1.5;
                break;
            case rarity.uncommon:
                buff = 1.8;
                break;
            case rarity.rare:
                buff = 2;
                break;
            case rarity.epic:
                buff = 2.5;
                break;
            case rarity.legendary:
                buff = 3;
                break;
        }
        buff *= itemLevel;
        result.push({
            stat: stat,
            buff: buff,
            debuff: null
        })
    }
    return result;
}

function GenerateRarity(): rarity {
    const perc = Math.random() * 100
    if (perc <= 0.04) {
        return rarity.legendary;
    } else if (perc <= 0.6) {
        return rarity.epic;
    } else if (perc <= 1.3) {
        return rarity.rare;
    } else if (perc <= 4.1) {
        return rarity.uncommon;
    } else if (perc <= 21.96) {
        return rarity.uncommon;
    }
    return rarity.very_common;
}