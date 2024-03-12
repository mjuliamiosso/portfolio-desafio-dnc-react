import styles from './Experience.module.css'

function Experience({title, tech}){
    return(
        <div className={styles.experience}>
            <div>
                <h4>{title}</h4>
                <ul>
                    <li>{tech}</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience