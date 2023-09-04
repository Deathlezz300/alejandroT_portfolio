import { DataProjects, project } from '@/utils/ProjectsData';
import { createSlice } from '@reduxjs/toolkit';

export const MainSlice = createSlice({
    name: 'Main',
    initialState: {
     proyectos:DataProjects,
     showMenu:false as boolean
    },
    reducers: {
         FilterByTecnologia:(state,{payload}:{payload:string})=>{
            state.proyectos=DataProjects.filter(proyect=>{
                return proyect.tecnologiasFilter.includes(payload);
            })
         },
         toogleMenu:(state)=>{
            state.showMenu=!state.showMenu;
         }
    }
});


// Action creators are generated for each case reducer function
export const { FilterByTecnologia,toogleMenu } = MainSlice.actions;