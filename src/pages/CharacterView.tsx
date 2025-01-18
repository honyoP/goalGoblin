import { Character } from "../types/Character";

type Props = {
    character: Character
}

const CharacterView = ({character}: Props) => {
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
        </div>
    );
}

export default CharacterView;