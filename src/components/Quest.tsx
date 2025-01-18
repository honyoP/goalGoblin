import {MutableRefObject, useRef} from 'react';

export default function Quest({which, actives, setActive}:Props) {
    const currentName = useRef<string>("");
    if(actives[which-1] === 0)
    {
        currentStyle = disabledStyle;
    }
    else if(actives[which-1] === 1)
    {
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
                setActive(
                    [0,0,0,0,0]
                );
            }
        }
        else{
            resetName = false;
            setActive(
                actives.map((_, index) => 
                    index === which - 1 ? 1 : 2
                )
            );
        }
    };
    return <button style={currentStyle} onClick={()=>handleClick()}>
        {GetRandomName(currentName)} ({GiveTime(which)})</button>
};
let resetName:boolean = true;

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
    actives: number[];
    setActive: React.Dispatch<React.SetStateAction<number[]>>;
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

function GetRandomName(currentName:MutableRefObject<string>): string {
    console.log(resetName);
    if(resetName)
    {
        let max = names.length;
        currentName.current = names[Math.floor(Math.random() * (max))];
    }
    return currentName.current;
}
const names = ["Hunting deer", "Hunting wolves", "Hunting women", 
    "Gathering plants", "Finding reasons to live",
     "Contemplating life", "Straight up robbing mfs", "Going on a journey",
    "Delving into a dungeon"];