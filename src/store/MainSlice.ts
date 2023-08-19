import { DataProjects, project } from '@/utils/ProjectsData';
import { createSlice } from '@reduxjs/toolkit';

export const MainSlice = createSlice({
    name: 'Main',
    initialState: {
     proyectos:DataProjects
    },
    reducers: {
         FilterByTecnologia:(state,{payload}:{payload:string})=>{
            state.proyectos=state.proyectos.filter(proyect=>{
                return proyect.tecnologiasFilter.includes(payload);
            })
         }
    }
});


// Action creators are generated for each case reducer function
export const { FilterByTecnologia } = MainSlice.actions;