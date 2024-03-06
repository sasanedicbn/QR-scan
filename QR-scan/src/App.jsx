

import './App.css'
import { useState } from 'react'
import GenerateComponent from './components/GenerateComponent'
import Spinner from './components/Spinner'
import Button from './components/Button'
import QRcode from './components/QRcode'
function App() {
  const [show, setShow] = useState(true)
  // const [disabledBtn, setDisabledbtn] = useState(true)
  
  // function setBtnAvailable () {
  //   setDisabledbtn(true)
  // }
  function hiddenElement() {
    setShow(false)
  }
  setTimeout(hiddenElement, 2000)

  return (
    <div className="container">
    <GenerateComponent>
    <Button show={show}>Generate</Button>
    </GenerateComponent>
      {show && <Spinner/>}
    </div>
  )
}

export default App
