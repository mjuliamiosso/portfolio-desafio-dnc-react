import styles from './Cards.module.css'

function Cards({img,site, tech, title, description}) {
    return (
      <div className={styles.cards}>
        <div className={styles.cardsdetails}>
            <a href={site} target="_blank">
              <img src={img} alt='ERROR'/>
            </a>
            <ul>
                {tech}
            </ul>
        </div>
        <div className={styles.cardtext}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
      </div>
    )
}


export default Cards