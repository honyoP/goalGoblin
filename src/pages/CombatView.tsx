import { startCombat } from "../logic/combat";
import { Character } from "../types/Character";
import { Enemy } from "../types/Enemy";

type Props = {
    character: Character,
    enemy: Enemy,
}

const CombatView = ({character, enemy}: Props) => {
    return (
        <div>
            <span>{JSON.stringify(startCombat(character, enemy))}</span>
        </div>
    );
}

export default CombatView;