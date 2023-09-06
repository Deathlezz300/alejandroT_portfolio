import React from 'react'
import { NextPage } from 'next'
import { MainLayout } from '@/Layout/MainLayout';
import styles from '../styles/ProjectsPage.module.css'
import { SkillsImages, firebaseD } from '@/utils/SkillsImages';
import { FiltrarCard } from '@/Components/FiltrarCard';
import { DataProjects } from '@/utils/ProjectsData';
import { ProjectCard } from '@/Components/ProjectCard';
import {useSelector} from 'react-redux'
import { RootState } from '@/store/store';

let SkillsImage2=[...SkillsImages]
SkillsImage2.pop()
SkillsImage2.push(firebaseD)

 const ProjectsPage:NextPage = () => {

    const {proyectos}=useSelector((state:RootState)=>state.main);

  return (
    <MainLayout title='Proyectos' description='Proyectos portafolio web Alejandro Toledo'>
        <section className={styles.boxSectionProjectPage}>
            <h1 className={styles.titleProjectsPage}>Todos los proyectos</h1>
            {/* <h3 className={styles.subtitleProjectsPage}>Filtrar por tecnologia</h3> */}
            <div className={styles.boxTecnologiasProjectPage}>
                {
                    SkillsImage2.map(skill=>{
                        return <FiltrarCard imagen={skill.image} texto={skill.texto} key={skill.texto}/>
                    })
                }
            </div>
            <div className={styles.boxProjectPage}>
                {
                    proyectos.map(proje=>{
                        return <ProjectCard key={proje.titulo} url={proje.url} titulo={proje.titulo} imagen={proje.imagen}
                        descripcionCorta={proje.descripcionCorta} decision={true} tecnologias={proje.tecnologias}/>
                    })
                }
            </div>
        </section>
    </MainLayout>
  )
}


export default ProjectsPage;