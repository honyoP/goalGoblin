import Quest from './Quest';
import {useState} from 'react';
const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
};


export default function QuestWindow() {
    const [actives, setActive] = useState<number[]>([0,0,0,0,0]);
    return <div style={containerStyle}>{GetQuests(5, actives, setActive)}</div>;
}

function GetQuests(n:number, actives:number[], setActive:React.Dispatch<React.SetStateAction<number[]>>)
{
    const result = [];
    for(let i = 0; i < n; i++)
    {
        result.push(<Quest which = {i + 1} actives={actives} setActive={setActive}/>);
    }
    return result;
}