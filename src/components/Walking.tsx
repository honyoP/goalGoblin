import { useState, useEffect } from "react";
import "../AnimationWalk.css";
import sprite1 from "../assets/sprite1.png"
import sprite2 from "../assets/sprite2.png"

export default function Walking() {
    const [gifPaused, setGifPaused] = useState(false);
    const [spriteFrame, setSpriteFrame] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSpriteFrame((prevFrame) => (prevFrame === 0 ? 1 : 0));
        }, 500);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={`background ${gifPaused ? "paused" : ""}`} onClick={() => setGifPaused(!gifPaused)}>
            <div className="character">
                <img width="0%"
                    src={spriteFrame === 0 ? sprite1 : sprite2}
                    alt="Character animation"
                />
            </div>
        </div>
    );
}