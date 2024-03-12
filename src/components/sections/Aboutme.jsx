import styles from './Aboutme.module.css'
import Skills from '../elements/Skills'
import Experience from '../elements/Experience'
import icon1 from '../image/icons/icon-1.svg'
import icon2 from '../image/icons/icon-2.svg'
import icon3 from '../image/icons/icon-3.svg'

function Aboutme(){
    const experienceHad = ['MySQL', 'Git e Github', 'PHP', 'Figma', 'JavaScript']
    const listExperienceHad = experienceHad.map(experienceHad => <li>{experienceHad}</li>);

    const experienceYears = ['HTML', 'CSS']
    const listExperienceYears = experienceYears.map(experienceYears => <li>{experienceYears}</li>);

    const experienceLearning = ['React', 'SASS', 'JavaScript', 'TypeScript' ]
    const listExperienceLearning = experienceLearning.map(experienceLearning => <li>{experienceLearning}</li>);


    return(
        <div className={styles.aboutme}>
            <h2>Sobre mim</h2>
            <div className={styles.aboutmeContainer}>
                <h3>Maria Júlia Miosso</h3>
                <p>Olá, atualmente estou estudando a formação de FullStack da Escola de Tecnologia DNC com o objetivo de conseguir meu primeiro emprego na área.
                </p>
                <div className={styles.linkContainer}>
                    <p><a href="https://www.instagram.com/mjmiosso" target="_blank">INSTAGRAM</a></p>
                    <p><a href="https://github.com/mjuliamiosso" target="_blank">GITHUB</a></p>
                    <p><a href="https://www.linkedin.com/in/maria-julia-miosso/" target="_blank">LINKEDIN</a></p>
                </div>
            </div>
            <div className={styles.aboutmeSkills}>
                <Skills
                icon={icon1}
                title='Interface & Design'
                description='UI-UX.'
                >
                </Skills>
                <Skills
                icon={icon2}
                title='HTML & CSS'
                description='Sites responsivos.'
                >
                </Skills>
                <Skills
                icon={icon3}
                title='JavaScript'
                description='Sites mais dinâmicos.'
                >
                </Skills>
            </div>
            <div className={styles.aboutmeExperiences}>
                <Experience
                title='Tive experiências com'
                tech={listExperienceHad}
                >
                    

                </Experience>

                <Experience
                title='Tenho anos de experiência'
                tech={listExperienceYears}
                >

                </Experience>

                <Experience
                title='Estou estudando'
                tech={listExperienceLearning}
                >

                </Experience>
            </div>
        </div>
    )
}

export default Aboutme