import { MainLayout } from '@/Layout/MainLayout';
import { NextPage } from 'next'
import React from 'react'
import { About } from '../Components/About';
import { Skills } from '../Components/Skills';
import { Projects } from '@/Components/Projects';
import { Contact } from '@/Components/Contact';

export const HomePage:NextPage = () => {


  return (
    <MainLayout title='Inicio' description='Portafolio Web Alejandro Toledo'>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </MainLayout>
  )
}


export default HomePage;
