import React,{FC} from 'react'
import { StaticImageData } from 'next/image'
import { tecnologia } from '@/utils/ProjectsData'
import styles from '../styles/ProjectCard.module.css'
import Image from 'next/image'
import { TecnologiaCard } from './TecnologiaCard'
import Link from 'next/link'

interface props{
    titulo:string,
    imagen:StaticImageData,
    descripcionCorta:string,
    tecnologias:tecnologia[]
}

export const ProjectCard:FC<props> = ({titulo,imagen,descripcionCorta,tecnologias}) => {
  return (
    <Link href={`/projects/${titulo}`} style={{textDecoration:'none',color:'black'}}>
        <div className={styles.boxProjectCard}>
            <div className={styles.boxDataInfoProject}>
                <div className={styles.boxTextProject}>
                    <h3 className={styles.titleProjectPart}>{titulo}</h3>
                    <p className={styles.descriptionProjectPart}>{descripcionCorta}</p>
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
                    className={styles.projectImagen}
                    src={imagen}
                    alt=''/>
        </div>
    </Link>
  )
}
