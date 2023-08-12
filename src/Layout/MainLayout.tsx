import { NavBar } from '@/Components/NavBar'
import Head from 'next/head'
import React,{FC} from 'react'

interface props{
    title:string,
    description:string,
    children:JSX.Element | JSX.Element[]
}

export const MainLayout:FC<props> = ({title,description,children}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='og:title' content={title}/>
            <meta name='og:image' content=''/>
        </Head>
        <NavBar/>
        <main>
            {children}
        </main>

    </>
  )
}
