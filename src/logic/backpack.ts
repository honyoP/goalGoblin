import { Storage } from "../storage"
import { Backpack } from "../types/Character";
import { Equipment } from "../types/Equipment";

export const addEquipmentToBackpack = async (equipmentId: number) => {
    const backpack: Backpack | undefined = await Storage.get('GoalGoblin_backpack');
    const equipmentData: Equipment[] | undefined = await Storage.get('GoalGoblin_equipmentData');
    if (backpack === null || equipmentData === null)
    {
        return null;
    }
    const equipment: Equipment | undefined = equipmentData?.find(e => e.id === equipmentId);
    if (equipment === undefined)
        return null;
    backpack?.item_ids.push(equipment.id);

    await Storage.set('GoalGoblin_backpack', backpack);
    return true;
}

export const removeEquipmentFromBackpack = async (equipmentId: number) => {
    const backpack: Backpack | undefined = await Storage.get('GoalGoblin_backpack');
    const equipmentData: Equipment[] | undefined = await Storage.get('GoalGoblin_equipmentData');
    if (backpack === null || equipmentData === null)
    {
        return null;
    }
    const equipment: Equipment[] | undefined = equipmentData?.filter(e => e.id !== equipmentId);
    if (equipment === undefined)
        return null;
    backpack?.item_ids.filter(e => e !== equipmentId);
    await Storage.set('GoalGoblin_backpack', backpack);
    await Storage.set('GoalGoblin_equipmentData', equipment);
}