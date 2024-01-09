

import React from 'react'
import styles from '../styles/About.module.css';
import perfil from '../../public/images/profile.webp'
import Image from 'next/image'
import DownloadIcon from '@mui/icons-material/Download';
import { Reveal } from './Reveal';
import { useTranslation } from 'react-i18next';

export const About = () => {

  const [t,i18n]=useTranslation("global");


  return (
    <section className={styles.boxSection}>
        <div className={styles.boxHeadAbout}>
            <Reveal>
            <div className={styles.boxTitleWeb}>
                <span className={styles.circle1}></span>
                <h2 className={styles.titleWebDeveloper}>{t("about.title")}</h2>
            </div>
            </Reveal>
            <Reveal>
                <div className={styles.boxDisponible}>
                        <span className={styles.circle2}></span>
                        <span className={styles.titleTrabajo}>{t("about.status")}</span>
                </div>
            </Reveal>
        </div>
        <div className={styles.boxInfoMe}>
            <Reveal width='52%' clase={`${styles.cambiarUbi}`}>
                <div className={styles.boxDataMe}>
                        <h1 className={styles.titleDataMe}>{t("about.name")}</h1>
                        <p className={styles.textDataMe}>{t("about.description")}</p>
                        <a className={styles.buttonCV} target='_blank' href={t("about.link-resume")}>
                            <DownloadIcon fontSize='small'/>
                            {t("about.resume")}</a>
                </div>
            </Reveal>
            <Reveal clase={`${styles.boxRevealImagen}`}>
                <Image className={styles.perfilImage} src={perfil} alt=''/>
            </Reveal>
        </div>
    </section>
  )
}
