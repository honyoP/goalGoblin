import { useState } from "react";
import { Storage } from "../storage";
import { Character } from "../types/Character";

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
            } catch (error) {
                console.error('Invalid JSON file:', error);
            }
        }
    }

    const characterTemplate: Character = {
        dexterity: 12,
        experience: 0,
        health: 15,
        intelligence: 10,
        level: 1,
        mana: 15,
        name: name,
        shekels: 0,
        skill_points: 0,
        stamina: 15,
        strength: 15,
        total_items_earned: 0,
        total_monsters_slain: 0,
        total_quests_done: 0,
        total_shekels_earned: 0,
        total_time_spent: "",
        vitality: 10,
    }

    return (
        <div>
            <input value={name} onChange={event => setName(event.target.value)} />
            <button type="submit" onClick={() => handleUpload(characterTemplate)}>Create new Character!</button>
        </div>
    );
}

export default CharacterCreator;