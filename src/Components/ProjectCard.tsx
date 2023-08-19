import React,{FC} from 'react'
import { StaticImageData } from 'next/image'
import { tecnologia } from '@/utils/ProjectsData'
import styles from '../styles/ProjectCard.module.css'
import Image from 'next/image'
import { TecnologiaCard } from './TecnologiaCard'
import Link from 'next/link'
import { Reveal } from './Reveal'

interface props{
    titulo:string,
    imagen:StaticImageData,
    descripcionCorta:string,
    tecnologias:tecnologia[],
    decision:boolean
}

export const ProjectCard:FC<props> = ({titulo,imagen,descripcionCorta,tecnologias,decision}) => {
  return (
    <Link href={`/projects/${titulo}`} style={{textDecoration:'none',color:'black'}}>
        <Reveal padding='0 0 10px 0'>
            <div className={`${decision ? styles.boxProjectCard2 : styles.boxProjectCard}`}>
                <div className={`${decision ? styles.boxDataInfoProject2 : styles.boxDataInfoProject}`}>
                    <div className={styles.boxTextProject}>
                        <h3 className={`${decision ? styles.titleProjectPart2 : styles.titleProjectPart}`}>{titulo}</h3>
                        <p className={`${decision ? styles.descriptionProjectPart2 : styles.descriptionProjectPart}`}>{descripcionCorta}</p>
                    </div>
                    <div className={styles.boxTecnologias}>
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
    </Link>
  )
}
