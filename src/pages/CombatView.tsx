import { useEffect, useState } from "react";
import { startCombat } from "../logic/combat";
import { Backpack, Character } from "../types/Character";
import { Enemy } from "../types/Enemy";
import { CombatResult } from "../types/Combat";
import GenerateEquipment from "../logic/equipmentGeneration";
import { Equipment, EquipmentTypes } from "../types/Equipment";
import { Storage } from "../storage";
import { useNavigate } from "react-router";

type Props = {
    character: Character,
    enemy: Enemy,
    setCharacter: (character:Character) => void
}

const CombatView = ({character, enemy, setCharacter}: Props) => {
    const [result, setResult] = useState<CombatResult | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        setResult(startCombat(character, enemy));
    }, []);

    const handleOnClick = async () => {
        if(result?.user_win)
        {
            const newEquipment = GenerateEquipment(enemy.level, EquipmentTypes.sword);
            const equipmentData: Equipment[] | undefined = await Storage.get('GoalGoblin_equipmentData');
            if(equipmentData === undefined){
                return;
            }
            const lastId = equipmentData[equipmentData.length - 1].id;
            newEquipment.id = lastId + 1;
            equipmentData.push(newEquipment);
            await Storage.set('GoalGoblin_equipmentData', equipmentData);
            const backpack: Backpack | undefined = await Storage.get('GoalGoblin_backpack');
            if(backpack === undefined){
                return;
            }
            backpack.equipment_ids.push(newEquipment.id);
            await Storage.set('GoalGoblin_backpack', backpack);
            character.experience += enemy.experience;
            if(character.experience >= character.experience_to_next_level)
            {
                character.level ++;
                character.experience -= character.experience_to_next_level;
                character.experience_to_next_level *= 3;
            }
            await Storage.set('GoalGoblin_userCharacter', character);
            setCharacter(character);
            navigate('/');
        }
    }

    return (
        <div>
            <span>{JSON.stringify(result)}</span>
            <button onClick={handleOnClick}>Collect reward.</button>
        </div>
    );
}



export default CombatView;