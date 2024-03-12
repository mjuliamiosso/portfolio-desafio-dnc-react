import styles from './Contact.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";

function Contact(){
    return(
        <div className={styles.contact}>
            <h1>Contato</h1>
            <ul>
                <li><a  href="https://www.linkedin.com/in/maria-julia-miosso/" target="_blank" ><FaLinkedin /></a></li>
                <li><a  href="https://www.instagram.com/mjmiosso" target="_blank" ><AiFillInstagram /></a></li>
                <li><a  href="https://github.com/mjuliamiosso" target="_blank" ><FaGithub  /></a></li>
            </ul>
        </div>
    )
}

export default Contact