import './App.css'
import { useRef } from 'react';
import BackgroundImage from './components/BackgroundImage'
import Navbar from './components/Navbar'
import TerminalBox from './components/TerminalBox'
import MobileWarning from './components/MobileWarning';

function App() {
  const inputRef = useRef(null);

  function handleClickAnywhere() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div onClick={handleClickAnywhere}>
      <div className="h-screen w-full hidden md:flex justify-center items-center" >
        <div className="w-full">
          <TerminalBox inputRef={inputRef} />
        </div>
      </div>
      <div className="h-screen w-full flex md:hidden justify-center items-center" >
        <div className="w-full">
          <MobileWarning />
        </div>
      </div>
      <Navbar />
      <BackgroundImage />
    </div>
  )
}

export default App
