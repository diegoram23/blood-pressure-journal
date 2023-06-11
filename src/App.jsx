import { HashRouter, Routes, Route } from "react-router-dom"

import BpForm from "./components/BpForm"
import Journal from "./pages/Journal"
import HeaderLayout from "./components/HeaderLayout"

function App() {

  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route path='/journal' element={<Journal />} />
          </Route>
        </Routes>
        <BpForm />
      </HashRouter>
    </div>
  )
}

export default App
