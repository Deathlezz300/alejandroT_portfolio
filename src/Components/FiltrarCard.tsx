import React,{FC} from 'react'
import styles from '../styles/FiltrarCard.module.css'
import { StaticImageData } from 'next/image'
import { Reveal } from './Reveal'
import Image from 'next/image'
import {useDispatch} from 'react-redux'
import { FilterByTecnologia } from '@/store/MainSlice'

interface props{
    imagen:StaticImageData,
    texto:string
}

export const FiltrarCard:FC<props> = ({imagen,texto}) => {
    
    const dispatch=useDispatch();

    const onAplicateFilter=()=>{
        dispatch(FilterByTecnologia(texto.toLocaleLowerCase()))
    }
  
    return (
    
        <Reveal>
            <div onClick={onAplicateFilter} className={styles.boxDivFiltrarCard}>
            <Image
                className={styles.imagenFiltrar}
                src={imagen}
                alt={texto}/>
            </div>
        </Reveal>
    
  )
}
