import React,{FC} from 'react'
import styles from '../styles/FiltrarCard.module.css'
import { StaticImageData } from 'next/image'
import { Reveal } from './Reveal'
import Image from 'next/image'

interface props{
    imagen:StaticImageData,
    texto:string
}

export const FiltrarCard:FC<props> = ({imagen,texto}) => {
  return (
    
        <Reveal>
            <div className={styles.boxDivFiltrarCard}>
            <Image
                className={styles.imagenFiltrar}
                src={imagen}
                alt={texto}/>
            </div>
        </Reveal>
    
  )
}
