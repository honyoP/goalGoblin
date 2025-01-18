import { Quest } from "../types/Quest";

type Props = {
    questList: Quest[],
    setQuest: (quest: Quest) => void
}

export default function QuestWindow({ questList, setQuest }: Props) {
    const handleClick = (quest: Quest) => {
        let currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + quest.time);
        quest.expires = currentDate.toISOString();
        setQuest(quest);
    }

    return (
        <div className='flex flex-col gap-3'>
            {questList.map((q) => {
                return (<button onClick={() => handleClick(q)} className="bg-black text-white">{`${q.time} ${q.name}`}</button>);
            })
            }
        </div>
    );
}