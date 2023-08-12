import React from 'react'
import Link from 'next/link'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import styles from '../styles/Home.module.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const NavBar = () => {
  return (
    <header className={styles.boxDivMainHeader}>
        <div className={styles['box-header']}>

        <div className={styles.boxName}>
            <AccountCircleOutlinedIcon htmlColor='rgb(49,49,49)'/>
            <h3 className={styles.titleName}>Alejandro Toledo</h3>
        </div>
        <div className={styles.boxLinks}>
            <Link className={styles['box-link']}  href='/' color='none'>
                <div className={styles.boxTextLink}>
                    <span className={styles.textLink}>Home</span>
                </div>
            </Link>
            <a className={styles['box-link']} href='#skills'>
                <div className={styles.boxTextLink}>
                    <span className={styles.textLink}>Skills</span>
                </div>
            </a>
            <a className={styles['box-link']} href='#projects'>
                <div className={styles.boxTextLink}>
                    <span className={styles.textLink}>Proyectos</span>
                </div>
            </a>
            <a className={styles['box-link']} href='#contact'>
                <div className={styles.boxTextLink}>
                    <span className={styles.textLink}>Contacto</span>
                </div>
            </a>
        </div>
        <div className={styles.boxRedes}>
                <a className={styles.linkRedes} href="https://github.com/Deathlezz300" target='_blank'><GitHubIcon htmlColor='#353849'/></a>
                <a className={styles.linkRedes} href="https://www.linkedin.com/in/alejandro-tc/" target='_blank'><LinkedInIcon htmlColor='#353849'/></a>
                <a className={styles.linkRedes} href="https://www.instagram.com/" target='_blank'><InstagramIcon htmlColor='#353849'/></a>                
            </div>
        </div>
    </header>
  )
}
