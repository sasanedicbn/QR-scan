
import './App.css'
import { useState } from 'react'
import GenerateComponent from './components/GenerateComponent'
import Spinner from './components/Spinner'
import Button from './components/Button'
import QRcode from './components/QRcode'
function App() {
  const [show, setShow] = useState(true)
  const [isLoading, setLoading] = useState(true)
  const [count, setCount] = useState(10)
  console.log(show)
  console.log(count)
  function hiddenElement() {
    setLoading(false)
  }
  setTimeout(hiddenElement, 2000)
  clearInterval(hiddenElement)

  if(!isLoading && count > 0){
     setTimeout(() => {
      setCount(count - 1)
    }, 1000)
  }
  // clearInterval or cleanTimeout
  return (
    <div className="container">
    <GenerateComponent>
    <Button show={show}>Generate</Button>
    </GenerateComponent>
      {isLoading ? <Spinner/> : <QRcode  count={count} setShow={setShow} />}
    </div>
  )
}

export default App
