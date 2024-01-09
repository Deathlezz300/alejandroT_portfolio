import React from 'react'
import { Reveal } from './Reveal'
import Link from 'next/link'
import styles from '../styles/SideBar.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toogleMenu } from '@/store/MainSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const SideBar = () => {


  const dispatch=useDispatch();

  const {showMenu}=useSelector((state:RootState)=>state.main);

  const [t,int18]=useTranslation("global");

  return (
    <section className={`${styles.boxSectionSide} ${showMenu ? styles.boxSectionSideCambiar : ''}`}>
            <div className={styles.boxSideLinks}>
                <Link onClick={()=>dispatch(toogleMenu())} className={styles['box-link']}  href='/' color='none'>
                        <Reveal>
                            <span className={styles.textLinkSide}>{t("header.home")}</span>
                        </Reveal>
                </Link>
                <Link onClick={()=>dispatch(toogleMenu())} className={styles['box-link']} href='#skills'>
                        <Reveal>
                            <span className={styles.textLinkSide}>{t("header.skills")}</span>
                        </Reveal>
                </Link>
                <Link onClick={()=>dispatch(toogleMenu())} className={styles['box-link']} href='/projects'>
                        <Reveal>
                            <span className={styles.textLinkSide}>{t("header.projects")}</span>
                        </Reveal>
                </Link>
                <Link onClick={()=>dispatch(toogleMenu())} className={styles['box-link']} href='/#contacto'>
                        <Reveal>
                            <span className={styles.textLinkSide}>{t("header.contact")}</span>
                        </Reveal>
                </Link>
            </div>
            <div className={styles.boxRedes}>
                <Reveal><a className={styles.linkRedes} href="https://github.com/Deathlezz300" target='_blank'><GitHubIcon htmlColor='#353849'/></a></Reveal>
                <Reveal><a className={styles.linkRedes} href="https://www.linkedin.com/in/alejandro-tc/" target='_blank'><LinkedInIcon htmlColor='#353849'/></a></Reveal>
                <Reveal><a className={styles.linkRedes} href="https://www.instagram.com/" target='_blank'><InstagramIcon htmlColor='#353849'/></a></Reveal>                
            </div>
    </section>
  )
}
