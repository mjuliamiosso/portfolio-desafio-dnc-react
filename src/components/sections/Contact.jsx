import styles from './Contact.module.css'
import instagram from "../image/icons/instagram.svg"
import linkedin from "../image/icons/linkedin.svg"
import github from "../image/icons/github.svg"

function Contact(){
    return(
        <div className={styles.contact}>
            <h1>Contato</h1>
            <ul>
                <li><a  href="https://www.linkedin.com/in/maria-julia-miosso/" target="_blank" ><img src={linkedin} alt="ERROR" /></a></li>
                <li><a  href="https://www.instagram.com/mjmiosso" target="_blank" ><img src={instagram} alt="ERROR" /></a></li>
                <li><a  href="https://github.com/mjuliamiosso" target="_blank" ><img src={github} alt="ERROR" /></a></li>
            </ul>
        </div>
    )
}

export default Contact