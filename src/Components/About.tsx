import React from 'react'
import styles from '../styles/About.module.css';
import perfil from '../../public/images/profile.webp'
import Image from 'next/image'
import DownloadIcon from '@mui/icons-material/Download';

export const About = () => {
  return (
    <section className={styles.boxSection}>
        <div className={styles.boxHeadAbout}>
            <div className={styles.boxTitleWeb}>
                <span className={styles.circle1}></span>
                <h2 className={styles.titleWebDeveloper}>Desarrollador Web</h2>
            </div>
            <div className={styles.boxDisponible}>
                <span className={styles.circle2}></span>
                <span className={styles.titleTrabajo}>Disponible para trabajar</span>
            </div>
        </div>
        <div className={styles.boxInfoMe}>
            <div className={styles.boxDataMe}>
                <h1 className={styles.titleDataMe}>Soy Alejandro Toledo</h1>
                <p className={styles.textDataMe}>Desarrollador Fullstack y estudiante de Ingeniería en Sistemas. 
                Mi enfoque abarca tanto el desarrollo frontend como backend, 
                utilizando tecnologías como como React, Node.js y Next.js</p>
                <a className={styles.buttonCV} target='_blank' href="https://drive.google.com/file/d/1vh8xN7vvRG-9iMbFcBXNMkDPkJhFAQ9z/view?usp=drive_link">
                    <DownloadIcon fontSize='small'/>
                    Descargar cv</a>
            </div>
            <div className={styles.boxImagen}>
                <Image className={styles.perfilImage} src={perfil} alt=''/>
            </div>
        </div>
    </section>
  )
}
