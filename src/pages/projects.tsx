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
import { useTranslation } from 'react-i18next';

let SkillsImage2=[...SkillsImages]
SkillsImage2.pop()
SkillsImage2.pop()
SkillsImage2.push(firebaseD)

 const ProjectsPage:NextPage = () => {

    const [t,in18]=useTranslation("global");

    const {proyectos}=useSelector((state:RootState)=>state.main);

  return (
    <MainLayout title='Proyectos' description='Proyectos portafolio web Alejandro Toledo'>
        <section className={styles.boxSectionProjectPage}>
            <h1 className={styles.titleProjectsPage}>{t("projects.data.titlePage")}</h1>
            <div className={styles.boxTecnologiasProjectPage}>
                {
                    SkillsImage2.map(skill=>{
                        return <FiltrarCard imagen={skill.image} texto={skill.texto} key={skill.texto}/>
                    })
                }
            </div>
            <div className={styles.boxProjectPage}>
                {
                    proyectos.map((proje,index)=>{
                        return <ProjectCard key={proje.titulo} url={proje.url} titulo={proje.titulo} imagen={proje.imagen}
                        descripcionCorta={t(`projects.${index+1}`) as string} decision={true} tecnologias={proje.tecnologias}/>
                    })
                }
            </div>
        </section>
    </MainLayout>
  )
}


export default ProjectsPage;