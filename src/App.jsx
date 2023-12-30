
import "./assets/style/custom.css"
// import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.css"
import Tickets from "./Pages/tickets"
import { Route, Routes } from "react-router-dom"
import NotFound from "./Pages/NotFound"

function App() {

  return (
    <>
    <Routes>
      <Route path='/not-found' element={<NotFound />}/>
      <Route path='/' element={<Tickets />} />
    </Routes>
    </>
  )
}

export default App
