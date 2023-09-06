import { NavBar } from '@/Components/NavBar'
import Head from 'next/head'
import React,{FC} from 'react'
import { SideBar } from '@/Components/SideBar'

interface props{
    title:string,
    description:string,
    children:JSX.Element | JSX.Element[]
}

const origin=(typeof window==='undefined' ? '' : window.location.origin);
const fullUrl=(typeof window==='undefined' ? '' : window.location);

export const MainLayout:FC<props> = ({title,description,children}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta property='og:description' name='description' content={description}/>
            <meta property='og:title' content={title}/>
            <meta property='og:image' content={`${origin}/images/imagen_portfolio.png`}/>
            <meta property='og:url' content={`${fullUrl}`}/>
        </Head>
        <SideBar/>
        <NavBar/>
        <main>
            {children}
        </main>

    </>
  )
}
