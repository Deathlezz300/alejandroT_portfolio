import React from 'react'
import { DataProjects } from '@/utils/ProjectsData'
import styles from '../styles/Projects.module.css'
import { ProjectCard } from './ProjectCard'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Reveal } from './Reveal'

export const Projects = () => {
  return (
    <section className={styles.boxSectionProjects}>
    <Reveal><h2 className={styles.mainTitleProject}>Proyectos</h2></Reveal>
        <div className={styles.boxEnlaceTodos}>
            <Reveal>
            <div className={styles.boxMainEnlaceTodos}>
                <Link className={styles.enlaceTodos} href="/projects">Ver todos</Link>
                <ArrowForwardIcon fontSize='small' htmlColor='#353849'/>    
            </div>
            </Reveal>
        </div>
        <div className={styles.boxGridProjects}>
            {
                DataProjects.map((proyecto,index)=>{
                    return index<4 ? <ProjectCard url={proyecto.url} decision={false} key={index} titulo={proyecto.titulo} imagen={proyecto.imagen}
                    descripcionCorta={proyecto.descripcionCorta} tecnologias={proyecto.tecnologias}/> : ''
                })
            }
        </div>
    </section>
  )
}
