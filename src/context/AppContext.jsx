import { createContext, useContext, useState } from "react";
//creamos el canal por donde va viajar la informacion.

const AppContext = createContext()

//Este componente envuelve tu app y guarda el estado compartido
export function AppProvider({children}){
    const [perfil, setPerfil] = useState({
        nombre:'',
        apellido:'',
        pais:'',
        ciudad:'',
        genero:'',
    })
    
    const value = {perfil, setPerfil}
    
    return(
        <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}