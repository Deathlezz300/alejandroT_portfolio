import react from '../../public/images/react.webp'
import javascript from '../../public/images/javascript.webp'
import typescript from '../../public/images/typescript.webp'
import next from '../../public/images/nextjs.webp'
import node from '../../public/images/nodejs.webp'
import redux from '../../public/images/redux.webp'
import tailwind from '../../public/images/tailwind.webp'
import css from '../../public/images/css.webp'
import mysql from '../../public/images/mysql.webp';
import {StaticImageData} from 'next/image'

interface imageData{
    image: StaticImageData,
    color:string,
    texto:string
}

export const SkillsImages:imageData[]=[
    {
        image:react,
        color:'#61DBFB',
        texto:'React'
    },
    {
        image:javascript,
        color:'#F0DC4E',
        texto:'Javascript'
    },
    {
        image:typescript,
        color:'#0078CF',
        texto:'Typescript'
    },
    {
        image:next,
        color:'#000000',
        texto:'Next.js'
    },
    {
        image:node,
        color:'#539F41',
        texto:'Node.js'
    },
    {
        image:redux,
        color:'#7E57B8',
        texto:'Redux'
    },
    {
        image:tailwind,
        color:'#02B7D7',
        texto:'Tailwind'
    },
    {
        image:css,
        color:'#1F4DE6',
        texto:'CSS'
    },{
        image:mysql,
        color:'#4478A2',
        texto:'MySQL'
    }
]


