import { useNavigate } from "react-router";
import { Character } from "../types/Character";
import CharacterCreator from "./CharacterCreator";

type Props = {
    character: Character | null,
    setCharacter: (character: Character) => void,
}

const CharacterView = ({ character, setCharacter }: Props) => {
    return (
        <>
            {(character !== null) ?
                <CharProfile character={character} /> :
                <CharacterCreator setCharacter={setCharacter} />
            }
        </>
    );
}

type CharProfileProps = {
    character: Character,
}

const CharProfile = ({ character }: CharProfileProps) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/adventure');
    }
    return (
        <div>
            <h2>{`Name: ${character.name}`}</h2>
            <p>{`Level: ${character.level}`}</p>
            <p>{`Health: ${character.max_health}/${character.health}`}</p>
            <p>{`Mana: ${character.max_mana}/${character.mana}`}</p>
            <p>{`Stamina: ${character.max_stamina}/${character.stamina}`}</p>
            <p>{`Strength: ${character.strength}`}</p>
            <p>{`Dexterity: ${character.dexterity}`}</p>
            <p>{`Intelligence: ${character.intelligence}`}</p>
            <p>{`Vitality: ${character.vitality}`}</p>
            <button onClick={handleNavigate}>Adventure!</button>
        </div>
    );
}

export default CharacterView;