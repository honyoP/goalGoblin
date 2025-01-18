import QuestWindow from "./QuestWindow";
import Timer from "./Timer";
import {useState, useEffect} from 'react';
import Walking from './Walking';
export default function Adventure() {
    const [actives, setActive] = useState<number[]>([0,0,0,0,0]);
    const [time, setTime] = useState<number>(0);
    const [quest, setQuest] = useState(defQuest)
    useEffect(() => {
        const activeIndex = actives.findIndex(x=>x === 1);
        setTime(GiveTime(activeIndex + 1));
    }, [actives]);
    useEffect(() => {
        if(quest.done)
        {
            alert("quest complete!");
            setActive([0,0,0,0,0]);
            quest.done = false;
            quest.name = "";
        }
        else if(quest.canceled)
        {
            setActive([0,0,0,0,0]);
            quest.canceled = false;
            quest.name = "";
        }
    }, [quest]);
    return <div>
        {quest.name}
        <Walking/>
        <Timer time={time} setTime={setTime} paused={actives.find(x => x === 1) === undefined ? true : false} setQuest={setQuest}/>
        <QuestWindow actives={actives} setActive={setActive} setQuest={setQuest}/> // into run button since i already got the logic
        //create subquest
        //take break
    </div>
}
const defQuest = {
    name: "",
    time: 0,
    done: false,
    canceled: false
}
function GiveTime(which:number)
{
    if(which === 0)
    {
        return 0;
    }
    if(which === 1)
    {
        return 1; /*is 15 * 60 */
    }
    return (30 * which - 30) * 60;
}