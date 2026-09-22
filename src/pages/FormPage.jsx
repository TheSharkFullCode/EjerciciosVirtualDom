import React from 'react'
import { useAppContext } from '../context/AppContext';

export default function FormPage() {
    const {perfil, setPerfil} = useAppContext()

    const handleChange = (campo, valor) => {
        setPerfil({...perfil, [campo]: valor})
    }

  return (
    <>
    <div className="page">

        <h1>Página del Formulario</h1>  
        <div className="field-container">

            <div className="field">
                <label>Nombre</label>
                <input type="text"
                value={perfil.nombre}
                onChange={(e)=>handleChange('nombre',e.target.value)} />
            </div>

            <div className="field">
                <label>Apellido</label>
                <input type="text" 
                value={perfil.apellido}
                onChange={(e)=>handleChange('apellido',e.target.value)}/>
            </div>

            <div className="field">
                <label>Ciudad</label>
                <input type="text"
                value={perfil.ciudad}
                onChange={(e)=>handleChange('ciudad',e.target.value)} />
            </div>

            <div className="field">
                <label>País</label>
                <input type="text"
                value={perfil.pais}
                onChange={(e)=>handleChange('pais',e.target.value)} />
            </div>

            <div className="field">
                <label>Género</label>
                <div className="pills">

                    {['Masculino', 'Femenino','Prefiero no decir'].map((opt)=>(
                      <div 
                      key={opt}
                      className={perfil.genero === opt ? 'pill active' : 'pill'}
                      onClick={()=>handleChange('genero',opt)}>

                        {opt}

                      </div>  
                    ))}

                </div>
            </div>
            
        </div>

        <p>Hola, {perfil.nombre || '...'} {perfil.apellido}</p>
        <p>de,{perfil.ciudad || '...'}</p>
    </div>     
                    
        <p>Género seleccionado: {perfil.genero || 'ninguno'}</p>

    </>
  )
}

