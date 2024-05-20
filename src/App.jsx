import { Outlet } from "react-router-dom";

import './App.css'
import Footer from "./Footer";
import Navbar from "./Navbar";


function App() {


  return (
    <>
   
<Navbar></Navbar>
    <Outlet></Outlet>

    </>
  )
}

export default App
