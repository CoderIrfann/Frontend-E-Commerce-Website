import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

const NavBar = ({size , setShow}) => {
  return (
    <div className='navbar w-full bg-slate-300   h-20 flex items-center px-4 shadow-lg border rounded-xl '>
      <div className='container mx-auto flex justify-between items-center border-y rounded-2xl '>
        <span className='font-bold text-black  text-lg'>My Shop</span>
        <div className="card flex items-center space-xl-2  p-2 rounded-full shadow-sm cursor-pointer ">
          <i className='fas fa-cart-plus text-black text-2xl' onClick={()=>setShow(false)}></i>
          <span className='text-red-600 relative -top-3 right-3  font-bold text-2xl   rounded-xl m-1'>{size}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
