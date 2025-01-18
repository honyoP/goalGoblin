import QuestWindow from "./QuestWindow";
import Timer from "./Timer";
import {useState, useEffect} from 'react';
import Walking from './Walking';
export default function Adventure() {
    const [actives, setActive] = useState<number[]>([0,0,0,0,0]);
    const [time, setTime] = useState<number>(0);
    useEffect(() => {
        const activeIndex = actives.findIndex(x=>x === 1);
        setTime(GiveTime(activeIndex + 1));
    }, [actives]);
    return <>
        //title
        <Walking/>
        <Timer time={time} setTime={setTime} paused={actives.find(x => x === 1) === undefined ? true : false}/>
        <QuestWindow actives={actives} setActive={setActive}/> // into run button since i already got the logic
        //create subquest
        //take break
    </>
}

function GiveTime(which:number)
{
    if(which === 0)
    {
        return 0;
    }
    if(which === 1)
    {
        return 15 * 60;
    }
    return (30 * which - 30) * 60;
}