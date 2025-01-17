export default function Quest({which}:Props) {
    return <button onClick={()=>{alert(which)}}>{GetRandomName()} ({GiveTime(which)})</button>
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
    which: number;
};

function GetRandomName(): string {
    let max = names.length;
    return names[Math.floor(Math.random() * (max))];
}
const names = ["Hunting deer", "Hunting wolves", "Hunting women", 
    "Gathering plants", "Finding reasons to live",
     "Contemplating life", "Straight up robbing mfs", "Going on a journey",
    "Delving into a dungeon"];