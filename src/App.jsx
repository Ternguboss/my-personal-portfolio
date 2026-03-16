import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Notfound from "./page/Notfound"

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