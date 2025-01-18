import { useState } from "react";
import { Storage } from "../storage";
import { Backpack, Character } from "../types/Character";

type Props = {
    setCharacter: (character: Character) => void,
}

const CharacterCreator = ({ setCharacter }: Props) => {
    const [name, setName] = useState("");
    const handleUpload = async (character: Character) => {
        if (character) {
            setCharacter(characterTemplate);
            try {
                await Storage.set('GoalGoblin_userCharacter', character);
                await Storage.set('GoalGoblin_backpack', starterBackpack);
            } catch (error) {
                console.error('Invalid JSON file:', error);
            }
        }
    }

    const characterTemplate: Character = {
        level: 1,
        experience: 0,
        skill_points: 0,
        name: name,
        shekels: 0,

        health: 15,
        max_health: 15,
        mana: 15,
        max_mana: 15,
        stamina: 15,
        max_stamina: 15,

        armor: 0,
        damage: [1, 4],

        strength: 1,
        dexterity: 1,
        intelligence: 1,
        vitality: 1,
        total_items_earned: 0,
        total_monsters_slain: 0,
        total_quests_done: 0,
        total_shekels_earned: 0,
        total_time_spent: "",
    }

    const starterBackpack: Backpack = {
        name: "Leather Backpack",
        max_capacity: 20,
        total_items: 0,
        item_ids: [],
        equipment_ids: [],
    }

    return (
        <div>
            <input value={name} onChange={event => setName(event.target.value)} />
            <button type="submit" onClick={() => handleUpload(characterTemplate)}>Create new Character!</button>
        </div>
    );
}

export default CharacterCreator;