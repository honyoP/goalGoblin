import { Character } from "../types/Character";

const CharacterView = (character: Character) => {
    return (
        <div>
            <h2>{character.name}</h2>
            <p>{}</p>
        </div>
    );
}

export default CharacterView;