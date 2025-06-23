import './App.css'
import BackgroundImage from './components/BackgroundImage'
import Navbar from './components/Navbar'
import TerminalBox from './components/TerminalBox'

function App() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-full">
          <TerminalBox />
        </div>
      </div>
      <Navbar />
      <BackgroundImage />
    </>
  )
}

export default App
