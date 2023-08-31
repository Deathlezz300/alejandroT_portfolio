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
import pipos from '../../public/images/pipos.webp'
import firebase from '../../public/images/firebase.webp'
import giftexpertapp from '../../public/images/giftExpertApp.webp'
import eduvet from '../../public/images/eduvet.webp'
import eccomerce from '../../public/images/eccomerce.webp'
import jorunal from '../../public/images/journal.webp'

export interface tecnologia{
    titulo:string,
    imagen:StaticImageData
}
 
export interface project{
    titulo:string,
    imagen:StaticImageData,
    descripcionCorta:string,
    tecnologias:tecnologia[],
    tecnologiasFilter:string[]
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
        tecnologiasFilter:['react','node.js','typescript','tailwind','mongo'
        ,'redux'],
        descripcionCorta:
        'ChatApp es una aplicación de mensajeria en tiempo real con todos'
        +' los usuarios regi    strados en el sistema.'
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
        tecnologiasFilter:['next.js','typescript','node.js','react'],
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
        tecnologiasFilter:['react','typescript','tailwind','redux'],
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
        tecnologiasFilter:['react','node.js','css','mongo','redux','javascript'],
        descripcionCorta:'CalendarApp permite al usuario crear '
        +'recordatorios o eventos que tenga pendientes a realizar durante el transcurso del tiempo'
    },
    {
        titulo:'Pipos y Melosos',
        imagen:pipos,
        tecnologias:[
            {titulo:'React',imagen:react},
            {titulo:'CSS',imagen:css},
            {titulo:'Firebase',imagen:firebase},
            {titulo:'Redux',imagen:redux}
        ],
        tecnologiasFilter:['react','firebase','css','javascript','redux'],
        descripcionCorta:'Pagina Web para la tienda Pipos y Melosos, en donde se evidencian los productos y modificar agregar y eliminar los mismos.'
    },
    {
        titulo:'JournalApp',
        imagen:jorunal,
        tecnologias:[
            {titulo:'React',imagen:react},
            {titulo:'CSS',imagen:css},
            {titulo:'Firebase',imagen:firebase},
            {titulo:'Redux',imagen:redux},
        ],
        tecnologiasFilter:['react','redux','firebase','css','javascript'],
        descripcionCorta:'Plataforma web para crear notas de manera sencilla y accesible en un solo lugar. Compatible con múltiples dispositivos, permitiendo un acceso fácil desde cualquier lugar'
    },
    {
        titulo:'GiftExpertApp',
        imagen:giftexpertapp,
        tecnologias:[
            {titulo:'React',imagen:react},
            {titulo:'CSS',imagen:css}
        ],
        tecnologiasFilter:['react','css','javascript'],
        descripcionCorta:'GiftExpertApp permite al usuario realizar busquedas de gifs con base al parametro ingresado en el buscador'
    },
    {
        titulo:'EduvetQuiz',
        imagen:eduvet,
        tecnologias:[
            {titulo:'React',imagen:react},
            {titulo:'CSS',imagen:css},
            {titulo:'Redux',imagen:redux}
        ],
        tecnologiasFilter:['react','css','javascript','redux'],
        descripcionCorta:'Pagina Web para estudiantes de MVZ, Quiz sobre conocimientos para repasar sobre diversas tematicas y opciones para seleccionar del Quiz a realizar'
    },
    {
        titulo:'Ecommerce fake',
        imagen:eccomerce,
        tecnologias:[
            {titulo:'CSS',imagen:css},
            {titulo:'Javascript',imagen:javascript}
        ],
        tecnologiasFilter:['css','javascript'],
        descripcionCorta:'E-commerce consumiendo API para la obtención de la informacion , el administrador podrá insertar, eliminar y actualizar la informacion de los productos (CRUD).'
    }

    
]