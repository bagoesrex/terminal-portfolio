import './App.css'
import BackgroundImage from './components/BackgroundImage'
import TerminalBox from './components/TerminalBox'

function App() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-full">
          <TerminalBox />
        </div>
      </div>
      <BackgroundImage />
    </>
  )
}

export default App
