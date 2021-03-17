import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function ExperienceBar (){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return(
        <header className="experience-bar">
            <span>0 XP</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}}>
                <span className="current-experience" style={{ left: `${percentToNextLevel}%`}}>
                    {currentExperience} XP
                </span>
                </div>
            </div>
            <span>{experienceToNextLevel} XP</span>
        </header>
    );
}