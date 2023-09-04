import React from 'react'
import { Reveal } from './Reveal'
import Link from 'next/link'
import styles from '../styles/SideBar.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const SideBar = () => {


  const {showMenu}=useSelector((state:RootState)=>state.main);

  return (
    <section className={`${styles.boxSectionSide} ${showMenu ? styles.boxSectionSideCambiar : ''}`}>
            <div className={styles.boxSideLinks}>
                <Link className={styles['box-link']}  href='/' color='none'>
                        <Reveal>
                            <span className={styles.textLinkSide}>Home</span>
                        </Reveal>
                </Link>
                <Link className={styles['box-link']} href='#skills'>
                        <Reveal>
                            <span className={styles.textLinkSide}>Skills</span>
                        </Reveal>
                </Link>
                <Link className={styles['box-link']} href='/projects'>
                        <Reveal>
                            <span className={styles.textLinkSide}>Proyectos</span>
                        </Reveal>
                </Link>
                <Link className={styles['box-link']} href='/#contacto'>
                        <Reveal>
                            <span className={styles.textLinkSide}>Contacto</span>
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
