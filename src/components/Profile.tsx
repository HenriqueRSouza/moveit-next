import styles from'../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={    styles.profileContainer     }>
            <img src="https://github.com/HenriqueRSouza.png" alt="Henrique Ribeiro"></img>
            <div>
                <strong>Henrique Ribeiro</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    Level 1
                </p>
            </div>
        </div>
    )
}