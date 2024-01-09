

export const validateLanguage=(lengua:string)=>{


    if(!lengua.includes("es") && !lengua.includes("en")){
        return "en"
    }

    return lengua;

}