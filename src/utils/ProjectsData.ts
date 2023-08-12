import react from '../../public/images/react.webp'
import javascript from '../../public/images/javascript.webp'
import typescript from '../../public/images/typescript.webp'
import next from '../../public/images/nextjs.webp'
import node from '../../public/images/nodejs.webp'
import redux from '../../public/images/redux.webp'
import tailwind from '../../public/images/tailwind.webp'
import css from '../../public/images/css.webp'
import { StaticImageData } from 'next/image'
import chatapp from '../../public/images/chatapp.webp'
import mongo from '../../public/images/mongo.webp'
import socket from '../../public/images/socket.webp';
import teslo from '../../public/images/teslo.webp';
import mui from '../../public/images/mui.webp';
import newsapp from '../../public/images/Newsapp.webp'
import calendarapp from '../../public/images/calendar.webp'

export interface tecnologia{
    titulo:string,
    imagen:StaticImageData
}
 
interface project{
    titulo:string,
    imagen:StaticImageData,
    descripcionCorta:string,
    tecnologias:tecnologia[]
}

export const DataProjects:project[]=[
    {
        titulo:'ChatApp',
        imagen:chatapp,
        tecnologias:[
            {titulo:'React',imagen:react},
            {titulo:'Node.js',imagen:node},
            {titulo:'Typescript',imagen:typescript},
            {titulo:'Tailwind',imagen:tailwind},
            {titulo:'MongoDB',imagen:mongo},
            {titulo:'Socket.io',imagen:socket}
        ],
        descripcionCorta:
        'ChatApp es una aplicación de mensajeria en tiempo real con todos'
        +' los usuarios registrados en el sistema.'
    },
    {
        titulo:'Teslo Shop',
        imagen:teslo,
        tecnologias:[
            {titulo:'Next.js',imagen:next},
            {titulo:'MongoDB',imagen:mongo},
            {titulo:'Typescript',imagen:typescript},
            {titulo:'Material UI',imagen:mui}
        ],
        descripcionCorta:'Teslo Shop es un clon de la pagina de Tesla,'
        +' en donde se puede realizar todas las acciones disponibles en un e-commerce.'
    },
    {
        titulo:'NewsApp',
        imagen:newsapp,
        tecnologias:[
            {titulo:'React',imagen:react},
            {titulo:'Typescript',imagen:typescript},
            {titulo:'Tailwind',imagen:tailwind},
            {titulo:'Redux',imagen:redux}
        ],
        descripcionCorta:'NewsApp es una pagina web que permite '
        +'buscar noticias de los temas que se desee, permitiendo al usuario filtrar la información por idioma.'
    },
    {
        titulo:'CalendarApp',
        imagen:calendarapp,
        tecnologias:[
            {titulo:'React',imagen:react},
            {titulo:'Node.js',imagen:node},
            {titulo:'CSS',imagen:css},
            {titulo:'MongoDB',imagen:mongo},
            {titulo:'Redux',imagen:redux},
        ],
        descripcionCorta:'CalendarApp permite al usuario crear '
        +'recordatorios o eventos que tenga pendientes a realizar durante el transcurso del tiempo'
    }
]