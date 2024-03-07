
import './App.css'
import { useState } from 'react'
import GenerateComponent from './components/GenerateComponent'
import Spinner from './components/Spinner'
import Button from './components/Button'
import QRcode from './components/QRcode'
function App() {
  const [show, setShow] = useState(true)
  const [count, setCount] = useState(10)
  function hiddenElement() {
    setShow(false)
  }
  setTimeout(hiddenElement, 2000)
  if(!show && count > 0){
    setTimeout(() => {
      setCount(count - 1)
      console.log(count)
    }, 1000)
  }
  return (
    <div className="container">
    <GenerateComponent>
    <Button show={show}>Generate</Button>
    </GenerateComponent>
      {show && <Spinner/>}
      {!show &&<QRcode count={count} />}
    </div>
  )
}

export default App
