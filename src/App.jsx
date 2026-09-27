import {Routes, Route} from 'react-router-dom'
import  FormPage  from './pages/FormPage'
import  ConsolePage  from './pages/ConsolePage'


import './App.css'
import Nabvar from './components/Nabvar';

function App() {

  return (
    <>
    <Nabvar/>
    <Routes>
      <Route path="/" element={ <FormPage/> } />
      <Route path="/consola" element={ <ConsolePage/> } />
    </Routes>
    </>
        
  )
}

export default App
