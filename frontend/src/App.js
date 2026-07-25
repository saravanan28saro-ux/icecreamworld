import {BrowserRouter, Routes, Route} from "react-router-dom"



import Flavors from "./component/Flavors"
import Header from "./component/Header/Index"
import History from "./component/History/index"
import HowToMake from "./component/Howtomake/index"
import Home from "./component/Home/index"
import Reviews from "./component/Reviews/index"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flavors" element={<Flavors />} />
        <Route path="/history" element={<History />} />
        <Route path="/howtomake" element={<HowToMake />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App