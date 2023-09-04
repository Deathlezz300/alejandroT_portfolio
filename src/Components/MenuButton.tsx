import React,{useEffect} from 'react'
import styles from '../styles/MenuButton.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { toogleMenu } from '@/store/MainSlice'
import { Reveal } from './Reveal'
import { useDispatch } from 'react-redux'

export const MenuButton = () => {

    const dispatch=useDispatch();

   const {showMenu}=useSelector((state:RootState)=>state.main);

  return (

            <Reveal padding='0 0 0 15px'>
                <button onClick={()=>dispatch(toogleMenu())} className={styles.buttonMenu}>
            <div className={showMenu ? styles.palo1 : ''}></div>
            <div className={showMenu ? styles.palo2 : ''}></div>
            <div className={showMenu ? styles.palo3 : ''}></div>
            </button>
            </Reveal>

  )
}
