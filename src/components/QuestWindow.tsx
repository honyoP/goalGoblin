import Quest from './Quest';
const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
};


export default function QuestWindow({actives, setActive}:QuestProps ) {
    return <div style={containerStyle}>{GetQuests(5, actives, setActive)}</div>;
}
type QuestProps = {
    actives: number[],
    setActive:React.Dispatch<React.SetStateAction<number[]>>
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