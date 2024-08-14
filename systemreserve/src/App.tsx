import DetailsSalas from "./modules/detailsSalas";
import Home from "./modules/homePage"
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App () {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detalhes/:id" element={<DetailsSalas/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
