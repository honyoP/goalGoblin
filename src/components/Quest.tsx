import {MutableRefObject, useRef} from 'react';

export default function Quest({which, actives, setActive, setQuest}:Props) {
    const currentName = useRef<string>("");
    let resetName: boolean = true;
    if(actives[which-1] === 0)
    {
        currentStyle = disabledStyle;
    }
    else if(actives[which-1] === 1)
    {
        resetName = false;
        currentStyle = activeStyle;
    }
    else{
        return <></>
    }
    const handleClick = () => {
        let val = actives[which - 1];
        if(val === 1)
        {
            resetName = true;
            if(confirm("Are you sure you want to cancel the quest?"))
            {
                setQuest((previous)=>({
                    ...previous,
                    canceled: true
                }));
            }
        }
        else{
            setQuest((previous)=>({
                ...previous,
                name: currentName.current
            }));
            setActive(
                actives.map((_, index) => 
                    index === which - 1 ? 1 : 2
                )
            );
            resetName = false;
            currentName.current = "Cancel quest."
        }
    };
    return <button style={currentStyle} onClick={()=>handleClick()}>
        {GetRandomName(currentName, resetName)} ({GiveTime(which)})</button>
};

function GiveTime(which:number)
{
    if(which === 1)
    {
        return "15m";
    }
    return 30 * which - 30 + "m";
}

type Props = {
    which: number,
    actives: number[],
    setActive: React.Dispatch<React.SetStateAction<number[]>>,
    setQuest: React.Dispatch<React.SetStateAction<{ name: string; time: number; done: boolean; canceled: boolean }>>
};

const activeStyle = {
    backgroundColor: "white",
    color: "black"
}

const disabledStyle = {
    backgroundColor: "black",
    color: "white"
}
let currentStyle = disabledStyle;

function GetRandomName(currentName:MutableRefObject<string>, resetName:boolean): string {
    if(resetName)
    {
        let max = names.length;
        currentName.current = names[Math.floor(Math.random() * (max))];
        resetName = false;
    }
    return currentName.current;
}
const names = ["Hunting deer", "Hunting wolves", "Hunting women", 
    "Gathering plants", "Finding reasons to live",
     "Contemplating life", "Straight up robbing mfs", "Going on a journey",
    "Delving into a dungeon"];