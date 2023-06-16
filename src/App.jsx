import { HashRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Footer from "./components/Footer"
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
      <Footer />
    </div>
  )
}

export default App
