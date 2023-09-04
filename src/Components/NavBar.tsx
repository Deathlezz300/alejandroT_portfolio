import React from 'react'
import Link from 'next/link'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import styles from '../styles/Home.module.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Reveal } from './Reveal';
import { MenuButton } from './MenuButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const NavBar = () => {

  const {showMenu}=useSelector((state:RootState)=>state.main);

  return (
    <header className={styles.boxDivMainHeader}>
        <div className={styles['box-header']}>

        <div className={styles.boxName}>
            <Reveal>
                <AccountCircleOutlinedIcon htmlColor='rgb(49,49,49)'/>
            </Reveal>
            <Reveal>
                <h3 className={styles.titleName}>Alejandro Toledo</h3>
            </Reveal>
        </div>
        <div className={styles.boxLinks}>
            <Link className={styles['box-link']}  href='/' color='none'>
                <div className={styles.boxTextLink}>
                    <Reveal>
                        <span className={styles.textLink}>Home</span>
                    </Reveal>
                </div>
            </Link>
            <Link className={styles['box-link']} href='#skills'>
                <div className={styles.boxTextLink}>
                    <Reveal>
                        <span className={styles.textLink}>Skills</span>
                    </Reveal>
                </div>
            </Link>
            <Link className={styles['box-link']} href='/projects'>
                <div className={styles.boxTextLink}>
                    <Reveal>
                        <span className={styles.textLink}>Proyectos</span>
                    </Reveal>
                </div>
            </Link>
            <Link className={styles['box-link']} href='/#contacto'>
                <div className={styles.boxTextLink}>
                    <Reveal>
                        <span className={styles.textLink}>Contacto</span>
                    </Reveal>
                </div>
            </Link>
        </div>
            <MenuButton/>
            <div className={styles.boxRedes}>
                <Reveal><a className={styles.linkRedes} href="https://github.com/Deathlezz300" target='_blank'><GitHubIcon htmlColor='#353849'/></a></Reveal>
                <Reveal><a className={styles.linkRedes} href="https://www.linkedin.com/in/alejandro-tc/" target='_blank'><LinkedInIcon htmlColor='#353849'/></a></Reveal>
                <Reveal><a className={styles.linkRedes} href="https://www.instagram.com/" target='_blank'><InstagramIcon htmlColor='#353849'/></a></Reveal>                
            </div>        
        </div>
    </header>
  )
}
