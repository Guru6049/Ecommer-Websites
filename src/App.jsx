import './App.css'
import {BrowserRouter,Routes,Route, Link, useNavigate} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Product from './Pages/Product'
import SignUp from './Pages/SignUp'
import Contact from './Pages/Contact'
import Navbar from './Pages/Navbar'
import Login2 from './Logins'
import Logins from './Logins'

function App() {
  
  
  return (
    <>
    <BrowserRouter>
                 <Navbar/>
               <Routes>
                      <Route path = "/" element = {<Home/>}/>
                      <Route path = "/about" element = {<About/>}/>
                      <Route path = "/product" element = {<Product/>}/>
                      <Route path = "/signUp" element = {<SignUp/>}/>
                      <Route path = "/contact" element = {<Contact/>}/>
                      <Route path = "/login" element = {<Login/>}/>
                      <Route path = "*" element = {<Error/>}/>
               </Routes>
    </BrowserRouter>
   
    {/* <Logins/> */}
    </>
  )
}

export default App
