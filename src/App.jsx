
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './App.css'

import { Landing } from "./screens/Landing";
import { ComputerGame } from "./screens/ComputerGame";
import { OnlineGame } from "./screens/OnlineGame"

function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/game" element={<ComputerGame />}/> 
        <Route path="/online" element={<OnlineGame />}/> 
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
