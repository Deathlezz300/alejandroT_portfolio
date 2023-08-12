import React from 'react'
import { DataProjects } from '@/utils/ProjectsData'
import styles from '../styles/Projects.module.css'
import { ProjectCard } from './ProjectCard'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Projects = () => {
  return (
    <section className={styles.boxSectionProjects}>
        <h2 className={styles.mainTitleProject}>Proyectos</h2>
        <div className={styles.boxEnlaceTodos}>
            <div className={styles.boxMainEnlaceTodos}>
                <Link className={styles.enlaceTodos} href="/projects">Ver todos</Link>
                <ArrowForwardIcon fontSize='small' htmlColor='#353849'/>
            </div>
        </div>
        <div className={styles.boxGridProjects}>
            {
                DataProjects.map((proyecto,index)=>{
                    return index<4 ? <ProjectCard key={index} titulo={proyecto.titulo} imagen={proyecto.imagen}
                    descripcionCorta={proyecto.descripcionCorta} tecnologias={proyecto.tecnologias}/> : ''
                })
            }
        </div>
    </section>
  )
}
