import styles from './Skills.module.css'

function Skills({icon, title, description}){
    return(
        <div className={styles.skills}>
            <img src={icon} alt="ERROR"/>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Skills