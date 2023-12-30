
import "./assets/style/custom.css"
// import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.css"
import Tickets from "./Pages/tickets"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/:tocken" element={<Tickets />} />
      </Routes>
    </>
  )
}

export default App
