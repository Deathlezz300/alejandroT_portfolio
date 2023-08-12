import React from 'react'
import styles from '../styles/Skills.module.css'
import { SkillsImages } from '@/utils/SkillsImages'
import { SkillCard } from './SkillCard'

export const Skills = () => {
  return (
    <section className={styles.boxSectionSkills}>
      <h2 className={styles.mainTitleSkills}>Skills</h2>
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
