import { useEffect, useState } from "react";
import { Storage } from "../storage";
import { Backpack } from "../types/Character";
import { Equipment } from "../types/Equipment";

const BackpackView = () => {
    const [backpack, setBackpack] = useState<Backpack | null>(null);
    const [equipment, setEquipment] = useState<Equipment[] | null>(null);
    const [hoveredEquipment, setHoveredEquipment] = useState<Equipment | null>(null);

    useEffect(() => {
        loadBackpack();
        loadEquipment();
    }, []);

    const loadBackpack = async () => {
        const storedBackpack = await Storage.get<Backpack>('GoalGoblin_backpack');
        setBackpack(storedBackpack || null);
    }

    const loadEquipment = async () => {
        const storedEquipment = await Storage.get<Equipment[]>('GoalGoblin_equipmentData');
        setEquipment(storedEquipment || null);
    }

    const handleMouseEnter = (equipment: Equipment) => {
        setHoveredEquipment(equipment);
    };

    const handleMouseLeave = () => {
        setHoveredEquipment(null);
    }

    return (
        <div>
            <div>
                <p>Equipment:</p>
                <>{backpack?.equipment_ids.map((i) => {
                    const e = equipment?.find(e => e.id === i);
                    return (<p 
                        key={i}
                        onMouseEnter={() => e && handleMouseEnter(e)}
                        onMouseLeave={handleMouseLeave}
                        >{e?.name}</p>);
                })}</>
            </div>
            <div>
                {hoveredEquipment && (
                    <div className="absolute top-12 left-5 bg-white border z-50 shadow-md">
                        <EquipmentDetailView e={hoveredEquipment} />
                    </div>
                )}
            </div>
        </div>
    );
}

const EquipmentDetailView = ({e}: {e: Equipment}) => {
    return (
        <div>
            <p>{`Name: ${e.name}`}</p>
            <p>{`Type: ${e.type}`}</p>
            <p>{`Name: ${e.damage}`}</p>
        </div>
    );
}

export default BackpackView;