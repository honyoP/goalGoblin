import Quest from './Quest';

const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
};

export default function QuestWindow() {
    return <div style={containerStyle}>{GetQuests(5)}</div>;
}

function GetQuests(n:number)
{
    const result = [];
    for(let i = 0; i < n; i++)
    {
        result.push(<Quest which = {i + 1}/>);
    }
    return result;
}