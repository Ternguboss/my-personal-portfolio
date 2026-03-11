import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/home"
import Notfound from "./page/notfound"

export default function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<Notfound/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}