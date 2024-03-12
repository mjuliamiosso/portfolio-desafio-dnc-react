import styles from './Projects.module.css'
import Cards from '../elements/Cards.jsx'
import project1 from '../image/projects/projeto-1.png'
import project2 from '../image/projects/projeto-2.png'
import project3 from '../image/projects/projeto-3.png'
import project4 from '../image/projects/projeto-4.png'

function Projects(){
    const skillBasic = ['html', 'css']
    const listSkillBasic = skillBasic.map(skillBasic => <li>{skillBasic}</li>);

    const skillAdvanced = ['html', 'css', 'javascript']
    const listSkillAdvanced = skillAdvanced.map(skillAdvanced => <li>{skillAdvanced}</li>);

    const skillReact = ['react']
    const listSkillReact = skillReact.map(skillReact => <li>{skillReact}</li>);

    return(
        <div className={styles.projects}>
            <h2>Projetos</h2>
            <div className={styles.cardsContainer}>
                <Cards
                img={project1}
                site='https://mjuliamiosso.github.io/desafio-landingpage/'
                tech={listSkillBasic}
                title='LP DNC'
                description='Desafio feito pela Escola DNC de recriar uma LP usando o conteúdo que foi dado na aula.'

                ></Cards>
                <Cards
                img={project2}
                site='https://mjuliamiosso.github.io/ccpx-dnc/'
                tech={listSkillAdvanced}
                title='CCPX LP'
                description='Desafio feito pela Escola DNC de recriar uma LP usando o conteúdo que foi dado na aula.'

                ></Cards>
                <Cards
                img={project3}
                site='https://mjuliamiosso.github.io/estudo-portfolio/'
                tech={listSkillBasic}
                title='Portfólio'
                description='Projeto feito acompanhado das aulas da Escola DNC.'

                ></Cards>
                <Cards
                img={project4}
                site='https://github.com/mjuliamiosso/portfolio-dnc-react'
                tech={listSkillReact}
                title='Porfólio'
                description='Projeito feito acompanhado das aulas da Escola DNC.'

                ></Cards>
            </div>
            
        </div>
    )
}

export default Projects