import QuestWindow from "./QuestWindow";
import Timer from "./Timer";
export default function Adventure() {
    return <>
            <Timer timeStart={7200} paused={true}/>
            <QuestWindow/>
        </>
}