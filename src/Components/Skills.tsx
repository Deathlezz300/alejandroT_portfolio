import React from 'react'
import styles from '../styles/Skills.module.css'
import { SkillsImages } from '@/utils/SkillsImages'
import { SkillCard } from './SkillCard'
import { Reveal } from './Reveal'
import { useTranslation } from 'react-i18next'

export const Skills = () => {


  const [t,i18nt]=useTranslation("global");

  return (
    <section id='skills' className={styles.boxSectionSkills}>
      <Reveal><h2 className={styles.mainTitleSkills}>{t("header.skills")}</h2></Reveal>
        <div className={styles.boxGridSkills}>
          {
            SkillsImages.map((skill,index)=>{
              return <SkillCard key={index} decision={false} image={skill.image} 
              color={skill.color} texto={skill.texto}/>
            })
          }
        </div>
    </section>
  )
}
