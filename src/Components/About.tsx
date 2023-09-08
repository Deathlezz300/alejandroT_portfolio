import React from 'react'
import styles from '../styles/About.module.css';
import perfil from '../../public/images/profile.webp'
import Image from 'next/image'
import DownloadIcon from '@mui/icons-material/Download';
import { Reveal } from './Reveal';

export const About = () => {
  return (
    <section className={styles.boxSection}>
        <div className={styles.boxHeadAbout}>
            <Reveal>
            <div className={styles.boxTitleWeb}>
                <span className={styles.circle1}></span>
                <h2 className={styles.titleWebDeveloper}>Desarrollador Web</h2>
            </div>
            </Reveal>
            <Reveal>
                <div className={styles.boxDisponible}>
                        <span className={styles.circle2}></span>
                        <span className={styles.titleTrabajo}>Disponible para trabajar</span>
                </div>
            </Reveal>
        </div>
        <div className={styles.boxInfoMe}>
            <Reveal width='52%' clase={`${styles.cambiarUbi}`}>
                <div className={styles.boxDataMe}>
                        <h1 className={styles.titleDataMe}>Soy Alejandro Toledo</h1>
                        <p className={styles.textDataMe}>Desarrollador Fullstack y estudiante de Ingeniería en Sistemas. 
                        Mi enfoque abarca tanto el desarrollo frontend como backend, 
                        utilizando tecnologías como como React, Node.js y Next.js</p>
                        <a className={styles.buttonCV} target='_blank' href="https://drive.google.com/file/d/1ehiacgXVOP7z4j2PNz9ZxO7O5huQtAJ4/view?usp=drive_link">
                            <DownloadIcon fontSize='small'/>
                            Descargar cv</a>
                </div>
            </Reveal>
            <Reveal clase={`${styles.boxRevealImagen}`}>
                <Image className={styles.perfilImage} src={perfil} alt=''/>
            </Reveal>
        </div>
    </section>
  )
}
