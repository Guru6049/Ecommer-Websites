import React from 'react'

function Login() {
  return (
    <div  className="flex justify-between items-center w-full bg-blue-950 space-x-4">

<div className="flex justify-between  items-center w-full min-h-screen bg-blue-950 p-6">
                <div className="flex items-center px-12">
                    <img src="./Robo.png" alt="Robo Img" className="w-80 h-100 object-contain" />
                </div>

    </div>

    <div className="grid w-96 bg-red-100 p-6 rounded-md shadow-md ">
  <h1 className="text-2xl font-bold text-center mb-4 text-black">Login Form</h1>
  <form action="" className="w-full flex flex-col gap-4">
    <input
      type="text"
      placeholder="Username"
      className="p-2 border border-gray-300 rounded-md text-black"
    />
    <input
      type="password"
      placeholder="Password"
      className="p-2 border border-gray-300 rounded-md text-black"
    />
    <button className="bg-indigo-500 hover:bg-fuchsia-500 px-4 py-2 rounded-md text-white font-semibold">
      Login
    </button>
  </form>
</div>
          

    </div>
  )
}

export default Login