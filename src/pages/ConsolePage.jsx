import {useState} from 'react'

export default function ConsolePage() {

    const [suma,setSuma]= useState({a:'', b: ''})
    const [resta,setResta] = useState({a:'',b:''})
    const [multiplicacion,setMultiplicacion] =useState({a: '',b: ''})
    const [division, setDivision] = useState({a: '', b: ''})
    
    
    const resultadoSuma = suma.a !== "" && suma.b !== "" ? Number(suma.a) + Number(suma.b):"";
    const resultadoResta = resta.a !== "" && resta.b !== "" ? Number(resta.a)-Number(resta.b):"";
    const resultadoMultiplicacion = multiplicacion.a !== "" && multiplicacion.b !== ""? Number(multiplicacion.a)*Number(multiplicacion.b):"";
    let resultDivision = "";

        if(division.a !== "" && division.b !== ""){
            resultDivision = Number(division.b) === 0
            ? "No puedes dividir entre 0"
            : Number(division.a) / Number(division.b)   
        }

  return (
    <>
    <div className="consola">
        <h1>Página de Consola</h1>  

        <div className="operacion">
            <h3>Suma</h3>

            <input type="number"
            value={suma.a}
            onChange={(e)=>setSuma({...suma, a: e.target.value})} />

            <span>+</span>

            <input type="number" 
            value={suma.b}
            onChange={(e)=>setSuma({...suma, b:e.target.value})}/>

            {resultadoSuma !== "" &&  <span> = {resultadoSuma} </span> }

        </div>

        <div className="operacion">
            <h3>Resta</h3>

            <input type="number"
            value={resta.a}
            onChange={(e)=>setResta({...resta, a: e.target.value})} />

            <span>-</span>

            <input type="number"
            value={resta.b}
            onChange={(e)=>setResta({...resta, b: e.target.value})} />
            {resultadoResta !== "" &&  <span> = {resultadoResta}</span>}

        </div>

        <div className="operacion">
            <h3>Multiplicación</h3>

            <input type="number"
            value={multiplicacion.a}
            onChange={(e)=>setMultiplicacion({...multiplicacion, a: e.target.value})} />
            <span> *  </span>

            <input type="number" 
            value={multiplicacion.b}
            onChange={(e)=>setMultiplicacion({...multiplicacion, b: e.target.value})}/>
           { resultadoMultiplicacion !== "" && <span>={resultadoMultiplicacion}</span>}
        </div>

        <div className="operacion">
            <h3>División</h3>
            
            <input type="number"
            value={division.a}
            onChange={(e)=>setDivision({...division, a: e.target.value})} />

            <span>/</span>
            <input type="number"
            value={division.b}
            onChange={(e)=>setDivision({...division, b: e.target.value})} />
            { resultDivision !== "" &&  <span> = {resultDivision} </span>}

        </div>

    </div>
    </>
  )
}



//     const sumas = { a: '5', b: '3' }
// console.log({ ...sumas, a: '9' })
// console.log({ a: '9' })
// console.log({ ...sumas, c: '7' })
