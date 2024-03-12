import styles from './Navbar.module.css'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                    <li><a href="" >ínicio</a></li>
                    <li><a href="">projetos</a></li>
                    <li><a href="">sobre mim</a></li>
                    <li><a href="">contato</a></li>
            </ul>
        </div>
    )
}

export default Navbar