import { useEffect, useState } from "react";
import { Storage } from "../storage";
import { Backpack } from "../types/Character";

const BackpackView = () => {
    const [backpack, setBackpack] = useState<Backpack | null>(null)

    useEffect(() => {
        loadBackpack();
    }, []);

    const loadBackpack = async () => {
        const storedBackpack = await Storage.get<Backpack>('GoalGoblin_backpack');
        setBackpack(storedBackpack || null);
    }
    return (
        <div>
            {JSON.stringify(backpack)}
        </div>
    );
}

export default BackpackView;