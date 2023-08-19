import React, { useEffect } from 'react'
import styles from '../styles/Contacto.module.css'
import {useForm} from 'react-hook-form'
import { Reveal } from './Reveal'
interface formData{
  name:string,
  correo:string,
  asunto:string,
  mensaje:string
}

export const Contact = () => {
  
  const {register,handleSubmit,formState:{errors},getValues}=useForm<formData>();

  const onSubmitContact=(data:formData)=>{
  
  }

  return (
    <section  className={styles.boxSectionContact} id='contacto'>
      <Reveal><h2 className={styles.titleContacto}>Contacto</h2></Reveal>
        <form action="" onSubmit={handleSubmit(onSubmitContact)} className={styles.boxFormContacto}>
            <Reveal padding='7px 3px 3px 3px' width='100%'>
            <div className={styles['input-group']}>
                
                <input {...register('name',{
                  required:'El nombre es obligatorio'
                })} placeholder=' ' style={{marginBottom:!errors.name ? '.9rem' : ''}} type="text" className={`${styles['input-form']} ${errors.name ? styles.borderRed : ''}`} name="name" />
                <label className={styles['label-input']}>Nombre</label>
              
          </div>
          <label className={styles.labelError} style={{display:errors.name ? 'block' : 'none'}} htmlFor="">{errors.name?.message}</label>
          <div className={styles['input-group']}>
              
                <input {...register('asunto',{
                  required:'El asunto es obligatorio'
                })} placeholder=' ' type="text"  style={{marginBottom:!errors.asunto ? '.9rem' : ''}} className={`${styles['input-form']} ${errors.asunto ? styles.borderRed : ''}`}/>
                <label className={styles['label-input']}>Asunto</label>
              
          </div>
          <label className={styles.labelError} style={{display:errors.asunto ? 'block' : 'none'}} htmlFor="">{errors.asunto?.message}</label>
          <div className={styles['input-group']}>
              
                <input {...register('correo',{
                  required:'El correo es obligatorio',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "No es un correo valido"
                  }
                })} placeholder=' ' type="text"  style={{marginBottom:!errors.correo ? '.9rem' : ''}} className={`${styles['input-form']} ${errors.correo ? styles.borderRed : ''}`}/>
                <label className={styles['label-input']}>Correo</label>
              
          </div>
          <label className={styles.labelError} style={{display:errors.correo ? 'block' : 'none'}} htmlFor="">{errors.correo?.message}</label>
          <div className={styles['input-group']}>
              
                <textarea {...register('mensaje',{
                  required:'El mensaje es obligatorio',
                  minLength:{value:8,message:'Minimo 8 caracteres'}
                })} placeholder=' '  style={{marginBottom:!errors.mensaje ? '.9rem' : ''}} className={`${styles['area-form']} ${errors.mensaje ? styles.borderRed : ''}`}></textarea>
                <label className={styles['label-area']}>Mensaje</label>
              
          </div>
          <label className={styles.labelError} style={{display:errors.mensaje ? 'block' : 'none'}} htmlFor="">{errors.mensaje?.message}</label>
          
            <button className={styles.botonEnviar} type='submit'>Enviar</button>
            </Reveal>
        </form>        
    </section>
  )
}
