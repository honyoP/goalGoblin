import QuestWindow from "../components/QuestWindow";
import { useState, useEffect } from 'react';
import Walking from '../components/Walking';
import { Quest } from "../types/Quest";
import { Storage } from "../storage";
import EnemyJson from "../data/Enemy.json";
import { useNavigate } from "react-router";
import { Enemy } from "../types/Enemy";

const EnemyDb: Enemy[] = EnemyJson.map(enemy => ({
    ...enemy,
    damage: enemy.damage.length === 2 ? enemy.damage as [number, number] : [0, 0]
}));

type Props = {
    setEnemy: (enemy: Enemy) => void
}

export default function Adventure({setEnemy}: Props) {
    const [questList] = useState<Quest[]>(GetQuests(5));
    const [quest, setQuest] = useState<Quest | null>(null);

    useEffect(() => {
        loadQuest()
    }, [])

    useEffect(() => {
        if (!quest) {
            removeQuest();
        } else {
            handleSaveQuest();
        }
    }, [quest])

    const handleSaveQuest = async () => {
        await Storage.set('GoalGoblin_activeQuest', quest);
    }

    const loadQuest = async () => {
        const storedActiveQuest = await Storage.get<Quest>('GoalGoblin_activeQuest');
        if (storedActiveQuest === null || storedActiveQuest === undefined) {
            return;
        }
        setQuest(storedActiveQuest);
    }

    const removeQuest = async () => {
        await Storage.remove('GoalGoblin_activeQuest');
    }

    return (
        <div>
            {quest ? <ActiveQuest quest={quest} setQuest={setQuest} setEnemy={setEnemy} /> : <QuestWindow questList={questList} setQuest={setQuest} />}
    //create subquest
        //take break
        </div>
    );
}

type ActiveQuestProps = {
    quest: Quest,
    setQuest: (quest: Quest | null) => void,
    setEnemy: (enemy: Enemy) => void,
}

const ActiveQuest = ({quest, setQuest, setEnemy}: ActiveQuestProps) => {
    const [countdown, setCountdown] = useState<string>('00:00:00');
    const [isComplete, setIsComplete] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            const endTime: string = quest.expires!;
            const convertedExpiration = new Date(endTime).getTime();
            if (!convertedExpiration)
                return;
            const now = new Date().getTime();
            const timeLeftInMillis =  convertedExpiration - now;

            if (timeLeftInMillis <= 0) {
                clearInterval(timer);
                setIsComplete(true);
            } else {
                const hours = Math.floor((timeLeftInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeftInMillis % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeftInMillis % (1000 * 60)) / 1000);

                const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                setCountdown(formattedTime);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const removeQuest = async () => {
        await Storage.remove('GoalGoblin_activeQuest');
    }

    const handleOnClickRunAway = () => {
        removeQuest();
        setQuest(null);
    }

    const handleOnClickComplete = () => {
        const validEnemies: Enemy[] = EnemyDb.filter((t) => t.level <= 10);
        setEnemy(validEnemies[Math.floor(Math.random() * validEnemies.length)]);
        navigate('/combat');
    }

    return (
        <div>
            <h2>{quest.name}</h2>
            <Walking />
            <p>{countdown}</p>
            <button onClick={() => handleOnClickRunAway()}>Run away!</button>
            {isComplete? <button onClick={() => handleOnClickComplete()}>Complete Quest!</button> : null}
        </div>
    );
}

function GetQuests(n: number): Quest[] {
    const result: Quest[] = []
    for (let i = 0; i < n; i++) {
        result.push({
            id: i,
            name: GetRandomName(),
            time: questTimes[i],
            expires: null,
        });
    }
    return result;
}

const questTimes = [
    1,
    15,
    30,
    60,
    120
]

function GetRandomName(): string {
    return names[Math.floor(Math.random() * (names.length))]
}
const names = ["Hunting deer", "Hunting wolves", "Hunting women",
    "Gathering plants", "Finding reasons to live",
    "Contemplating life", "Straight up robbing mfs", "Going on a journey",
    "Delving into a dungeon"];