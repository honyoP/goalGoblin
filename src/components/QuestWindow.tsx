import Quest from './Quest';
const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
};


export default function QuestWindow({actives, setActive, setQuest}:QuestProps ) {
    return <div style={containerStyle}>{GetQuests(5, {actives, setActive, setQuest})}</div>;
}
type QuestProps = {
    actives: number[],
    setActive:React.Dispatch<React.SetStateAction<number[]>>,
    setQuest: React.Dispatch<React.SetStateAction<{ name: string; time: number; done: boolean; canceled: boolean}>>
}
function GetQuests(n:number, {actives, setActive, setQuest}:QuestProps)
{
    const result = [];
    for(let i = 0; i < n; i++)
    {
        result.push(<Quest which = {i + 1} actives={actives} setActive={setActive} setQuest={setQuest}/>);
    }
    return result;
}