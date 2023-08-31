import React,{FC,useRef,useEffect} from 'react'
import {motion,useInView,useAnimation} from 'framer-motion'
import { CssBaselineProps } from '@mui/material';

interface props{
    children:JSX.Element | JSX.Element[],
    width?:'fit-content' | '100%' | string,
    padding?:string,
    clase?:string,
    overflow?:string,
    css?:CssBaselineProps
}

export const Reveal:FC<props> = ({children,width="fit-content",padding,clase,overflow='hidden',css}) => {
  
    const ref=useRef(null);
  
    const isInView=useInView(ref,{once:true});

    const mainControls=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])

    return (
    <div  className={clase} ref={ref} style={{position:'relative',width,padding,overflow}}>
        <motion.div
            variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1,y:0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5,delay:0.25}}
        >{children}</motion.div>
    </div>
  )
}
