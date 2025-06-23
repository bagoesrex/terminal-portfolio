import './App.css'
import { useRef } from 'react';
import BackgroundImage from './components/BackgroundImage'
import Navbar from './components/Navbar'
import TerminalBox from './components/TerminalBox'

function App() {
  const inputRef = useRef(null);

  function handleClickAnywhere() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div onClick={handleClickAnywhere}>
      <div className="h-screen w-full flex justify-center items-center" >
        <div className="w-full">
          <TerminalBox inputRef={inputRef} />
        </div>
      </div>
      <Navbar />
      <BackgroundImage />
    </div>
  )
}

export default App
