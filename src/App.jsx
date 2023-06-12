import { HashRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import BpForm from "./components/BpForm"
import Journal from "./pages/Journal"
import HeaderLayout from "./components/HeaderLayout"

function App() {

  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<Home />}/>
            <Route path='/journal' element={<Journal />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
