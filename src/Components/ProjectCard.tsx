import React,{FC} from 'react'
import { StaticImageData } from 'next/image'
import { tecnologia } from '@/utils/ProjectsData'
import styles from '../styles/ProjectCard.module.css'
import Image from 'next/image'
import { TecnologiaCard } from './TecnologiaCard'
import { Reveal } from './Reveal'
import { CssBaselineProps } from '@mui/material'

interface props{
    titulo:string,
    imagen:StaticImageData,
    descripcionCorta:string,
    tecnologias:tecnologia[],
    decision:boolean,
    url:string
}



export const ProjectCard:FC<props> = ({titulo,imagen,descripcionCorta,tecnologias,decision,url}) => {
  return (
    <a  href={url} target='_blank' style={{textDecoration:'none',color:'black',width:'fit-content'}}>
        <Reveal   padding='0 0 10px 0' >
            <div className={`${decision ? styles.boxProjectCard2 : styles.boxProjectCard}`}>
                <div className={`${decision ? styles.boxDataInfoProject2 : styles.boxDataInfoProject}`}>
                    <div className={styles.boxTextProject}>
                        <h3 className={`${decision ? styles.titleProjectPart2 : styles.titleProjectPart}`}>{titulo}</h3>
                        <p className={`${decision ? styles.descriptionProjectPart2 : styles.descriptionProjectPart}`}>{descripcionCorta}</p>
                    </div>
                    <div className={`${decision ? styles.boxTecnologias2 : styles.boxTecnologias}`}>
                        {
                            tecnologias.map((tec,index)=>{
                                return <TecnologiaCard key={index} titulo={tec.titulo} imagen={tec.imagen}/>
                            })
                        }
                    </div>
                </div>
                <Image
                        className={`${decision ? styles.projectImagen2 : styles.projectImagen}`}
                        src={imagen}
                        alt=''/>
            </div>
        </Reveal>
    </a>
  )
}
