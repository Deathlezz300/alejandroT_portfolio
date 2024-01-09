import React, { useMemo } from 'react'
import styles from '../styles/Projects.module.css'
import { ProjectCard } from './ProjectCard'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Reveal } from './Reveal'
import { useTranslation } from 'react-i18next';
import { DataProjects, project } from '@/utils/ProjectsData';

export const Projects = () => {

  const [t,int18]=useTranslation("global");


  return (
    <section className={styles.boxSectionProjects}>
    <Reveal><h2 className={styles.mainTitleProject}>{t("projects.data.title")}</h2></Reveal>
        <div className={styles.boxEnlaceTodos}>
            <Reveal>
            <div className={styles.boxMainEnlaceTodos}>
                <Link className={styles.enlaceTodos} href="/projects">{t("projects.data.see")}</Link>
                <ArrowForwardIcon fontSize='small' htmlColor='#353849'/>    
            </div>
            </Reveal>
        </div>
        <div className={styles.boxGridProjects}>
            {
                DataProjects.map((proyecto,index)=>{
                    return index<4 ? <ProjectCard url={proyecto.url} decision={false} key={index} titulo={proyecto.titulo} imagen={proyecto.imagen}
                    descripcionCorta={t(`projects.${index+1}`) as string} tecnologias={proyecto.tecnologias}/> : ''
                })
            }
        </div>
    </section>
  )
}
