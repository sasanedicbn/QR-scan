
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
 
  const showButton = count === 0;
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
  function resetApp  () {
    setShow(true);
    setLoading(true);
    setCount(10);
};
  return (
    <div className="container">
    <GenerateComponent>
    <Button show={showButton ? !show : show} isLoading={isLoading} setLoading={setLoading} >Generate</Button>
    </GenerateComponent>
      {isLoading ? <Spinner/> : <QRcode  count={count} setShow={setShow} />}
    </div>
  )
}

export default App
