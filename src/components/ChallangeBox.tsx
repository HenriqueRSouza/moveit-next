import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallangeBox.module.css'

export function ChallangeBox() {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resetCountdown  } = useContext(CountdownContext);


    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown()
    }
    function handleChallengeFailed(){
        resetCountdown();
        resetChallenge();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}></img>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                            
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo pra ganhar XP</strong>
                    <p>
                        <img src="/icons/level-up.svg" alt="level up"/>
                        Avance de level completando disafios
                    </p>
                </div>
                
            )}
        </div>
    );
}