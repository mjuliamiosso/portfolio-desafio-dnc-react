import styles from './Logo.module.css'

function Navbar(){
    return(
        <div className={styles.logo}>
            <p>
                <a href="https://www.escoladnc.com.br/" target="_blank">DNC</a>
            </p>
        </div>
    )
}

export default Navbar