import { MainLayout } from '@/Layout/MainLayout';
import { NextPage } from 'next'
import React from 'react'
import { About } from '../Components/About';
import { Skills } from '../Components/Skills';
import { Projects } from '@/Components/Projects';

export const HomePage:NextPage = () => {
  return (
    <MainLayout title='Home' description='pagina inicio para portafolio alejandro toledo'>
      <About/>
      <Skills/>
      <Projects/>
    </MainLayout>
  )
}


export default HomePage;
