import React,{FC} from 'react'
import styles from '../styles/Tecnologia.module.css';
import { StaticImageData } from 'next/image';
import Image from 'next/image'

interface props{
    imagen:StaticImageData,
    titulo:string
}

export const TecnologiaCard:FC<props> = ({imagen,titulo}) => {
  return (
    <div className={styles.boxTecnologiaCard}>
        <Image
        className={styles.tecnologiaImagenCard}
         src={imagen}
         alt=''/>
         <span className={styles.tituloTecnologiaCard}>{titulo}</span>
    </div>
  )
}
