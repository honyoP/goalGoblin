import { useEffect } from "react";

export default function Timer({time, setTime, paused, setQuest}:TimerProps) {
    useEffect(() => {
        if (paused) return;
        const interval = setInterval(() => {
            setTime((prevTime:number) => {
                if(prevTime - 1 < 0)
                {
                    setQuest((previous)=>({
                        ...previous,
                        done: true
                    }));
                    return 0; /*timer ended */
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [paused]);

    return <p>{formatTime(time)}</p>;
}
type TimerProps = {
    time: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    paused: boolean,
    setQuest: React.Dispatch<React.SetStateAction<{ name: string; time: number; done: boolean; canceled: boolean }>>
}
function formatTime(time:number) : string {
    let formatted = "";
    let totalSeconds = time;
    let totalMinutes = Math.floor(time / 60);
    let totalHours = Math.floor(totalMinutes / 60);
    totalSeconds = totalSeconds - 60 * totalMinutes;
    totalMinutes = totalMinutes - 60 * totalHours;
    formatted += totalHours.toString().padStart(2, "0");
    formatted += ":";
    formatted += totalMinutes.toString().padStart(2, "0");
    formatted += ":";
    formatted += totalSeconds.toString().padStart(2, "0");
    return formatted;
}