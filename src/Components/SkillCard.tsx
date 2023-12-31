import React,{FC} from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from '../styles/SkillCard.module.css'
import { Reveal } from './Reveal'


interface props{
    decision:boolean,
    image:StaticImageData,
    color:string,
    texto:string
}

export const SkillCard:FC<props> = ({decision,image,color,texto}) => {
  
    const demoStyles={
        '--color':`${color}`
    }
  
    return (
    <Reveal clase={styles.boxReveal} >
        <div className={styles.boxImageSkill}>
        <Image
            className={styles.imageSkill}
            src={image}
            alt=''
            style={{...demoStyles} as React.CSSProperties}/>
            <p style={{color}} className={styles.textoSkill}>{texto}</p>
    </div>
    </Reveal>
  ) 
}
