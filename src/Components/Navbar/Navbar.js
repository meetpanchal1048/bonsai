import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <div className="navbar-main ">
        <div className="flex p-6 space-x-5">
            <div className="text-3xl text-green-600">
                <a>⨳ bonsai</a>
            </div>
            <div className="flex text-lg space-x-4 pt-1 ">
                <a className='hover:text-green-600 ml-96' href="#">Products</a>
                <a className='hover:text-green-600' href="#">Templates</a>
                <a className='hover:text-green-600' href="#">Pricing</a>
                <a className='hover:text-green-600' href="#">Reviews</a>
                <a className='hover:text-green-600' href="#">Product</a>
            </div>
            <div className="flex space-x-5">
                <a className='ml-64 border-2 border-green-600 text-green-600 rounded-sm pt-1 px-5 font-semibold hover:text-white hover:bg-green-600' href="#">LOG IN</a>
                <a className=' border-2 border-green-600 bg-green-600 rounded-sm text-white pt-1 px-5 font-semibold hover:text-green-600 hover:bg-white' href="#">START FREE</a>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Navbar