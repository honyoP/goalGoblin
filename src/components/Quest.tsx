export default function Quest({which, actives, setActive}:Props) {
    if(actives[which-1] === 0)
    {
        currentStyle = disabledStyle;
    }
    else{
        currentStyle = activeStyle;
    }
    const handleClick = () => {
        console.log("i'm fucking alive");
        setActive(
            actives.map((value, index) => 
                index === which - 1 ? 1 : value
            )
        );
    };
    return <button style={currentStyle} onClick={()=>handleClick()}>
        {GetRandomName()} ({GiveTime(which)})</button>
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

function GetRandomName(): string {
    let max = names.length;
    return names[Math.floor(Math.random() * (max))];
}
const names = ["Hunting deer", "Hunting wolves", "Hunting women", 
    "Gathering plants", "Finding reasons to live",
     "Contemplating life", "Straight up robbing mfs", "Going on a journey",
    "Delving into a dungeon"];