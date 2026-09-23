import {useState} from 'react'

export default function ConsolePage() {
    const [suma,setSuma]= useState({a: '', b: ''})
    const [resta,setResta] = useState({a:'',b:''})
    const [multiplicacion,setMultiplicacion] =useState({a: '',b: ''})

    const resultadoMultiplicacion = Number(multiplicacion.a)*Number(multiplicacion.b)



    const resultadoSuma = Number(suma.a) + Number(suma.b)
    const resultadoResta = Number(resta.a) - Number(resta.b)

  return (
    <>
    <div>
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

            <span> = {resultadoSuma} </span>           

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
            <span> = {resultadoResta}</span>

        </div>

        <div className="operacion">
            <h3>Multiplicacion</h3>

            <input type="number"
            value={multiplicacion.a}
            onChange={(e)=>setMultiplicacion({...multiplicacion, a: e.target.value})} />
            <span> *  </span>

            <input type="number" 
            value={multiplicacion.b}
            onChange={(e)=>setMultiplicacion({...multiplicacion, b: e.target.value})}/>
            <span>={resultadoMultiplicacion}</span>
        </div>
    </div>
    </>
  )
}



//     const sumas = { a: '5', b: '3' }
// console.log({ ...sumas, a: '9' })
// console.log({ a: '9' })
// console.log({ ...sumas, c: '7' })
