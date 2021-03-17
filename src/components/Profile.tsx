import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from'../styles/components/Profile.module.css'
import { ChallangeBox } from './ChallangeBox'

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return(
        <div className={    styles.profileContainer     }>
            <img src="https://github.com/HenriqueRSouza.png" alt="Henrique Ribeiro"></img>
            <div>
                <strong>Henrique Ribeiro</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    Level {level}
                </p>
            </div>
        </div>
    )
}