import React from 'react'
import { useNavigate } from 'react-router-dom'


function Navbar() {
    const navigates = useNavigate()
  return (
    <div >
         <nav className='flex justify-between items-center w-full h-24 bg-red-200'>
                      <div className='flex justify-start  w-full bg-red-200 pl-5'>
                        <img src="./flip.png" alt="Guru" className='w-20 h-20' />
                      </div>

                      <div className='flex justify-center gap-5 w-full bg-red-200 '>
                      <button className="px-5 py-2 text-black font-semibold" onClick={()=>navigates("/")}>Home</button>
                      <button className="px-5 py-2 text-black font-semibold" onClick={()=>navigates("/about")}>About</button>
                      <button className="px-5 py-2 text-black font-semibold" onClick={()=>navigates("/contact")}>Contact</button>
                      <button className="px-5 py-2 text-black font-semibold" onClick={()=>navigates("/product")}>Product</button>
                      </div>

                      <div className='flex justify-end gap-4 w-full bg-red-200 pr-10  '>
                        <button className="bg-cyan-500 hover:bg-yellow-100 px-8 py-2 rounded-lg text-black font-semibold" onClick={()=>navigates("/login")}>Login</button>
                      <button className="bg-pink-500 hover:bg-yellow-100 px-8 py-2 rounded-lg text-black font-semibold" onClick={()=>navigates("/signUp")}>Sign Up</button>

                      </div>
                  </nav>
                  
                  
    </div>
  )
}

export default Navbar