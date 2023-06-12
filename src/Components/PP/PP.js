import React from 'react'
import arrow from '../Asset/Arrow.png'
import { TiTick } from 'react-icons/ti'

const PP = () => {
    return (
        <>

            <div className="pp-main">
                <div className="flex">
                    {/* Top */}
                    <div className="flex p-32 ">
                        <div className="flex flex-col ">
                            <div className="flex flex-col">
                                {/* <div className="flex ml-96">
                                    <a className='text-xs text-green-600 font-semibold ml-40 mb-4'>2 MONTHS FREE</a>
                                </div> */}
                                <div className="flex justify-center w-max mb-10 ml-96">
                                    <h3 className=' font-roboto text-3xl font-semibold ml-40 '>Plans & Pricing</h3>
                                    {/* <h3 className='text-md pt-2 ml-60 '>MONTHLY → YEARLY</h3> */}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex">
                                    <div className="flex flex-col bg-white border-2  p-10">
                                        <a className='font-roboto font-semibold text-xl'>Workflow</a>
                                        <a className='text-xl my-5'>$<span className='text-5xl'>19</span> /MONTH</a>
                                        <a className=' h-0.5 mb-5 w-full bg-green-600'></a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Unlimited Clients & Projects</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Invoicing & Payments</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Proposal & Contracts</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Scheduling</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Tasks & Time Tracking</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Forms & Questionnaires</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Expense Tracking</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Up to 5 Project Collaborators</a>
                                        <a className=' bg-green-600 text-center text-white mt-12 rounded py-3 ' href='#'>START FREE</a>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex flex-col bg-white border-2 ml-5 p-10">
                                        <a className='font-roboto font-semibold text-xl'>Workflow Plus</a>
                                        <a className='text-xl my-5'>$<span className='text-5xl'>29</span> /MONTH</a>
                                        <a className=' h-0.5 mb-5 w-full bg-green-600'></a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Unlimited Clients & Projects</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Invoicing & Payments</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Proposal & Contracts</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Scheduling</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Tasks & Time Tracking</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Forms & Questionnaires</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Expense Tracking</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Up to 5 Project Collaborators</a>
                                        <a className=' bg-green-600 text-center text-white mt-12 rounded py-3' href='#'>START FREE</a>
                                    </div>
                                </div>

                                {/* Yearly */}
                                <div className="flex">
                                    <div className="flex flex-col bg-white border-2 ml-5 p-10">
                                        <a className='font-roboto font-semibold text-xl'>Workflow</a>
                                        <a className='text-xl my-5'>$<span className='text-5xl'>49</span> /YEARLY <span className='text-green-600 text-xs'>+ 2 MONTH</span></a>
                                        <a className=' h-0.5 mb-5 w-full bg-green-600'></a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Unlimited Clients & Projects</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Invoicing & Payments</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Proposal & Contracts</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Scheduling</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Tasks & Time Tracking</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Forms & Questionnaires</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Expense Tracking</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Up to 5 Project Collaborators</a>
                                        <a className=' bg-green-600 text-center text-white mt-12 rounded py-3' href='#'>START FREE</a>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex flex-col bg-white border-2 ml-5 p-10">
                                        <a className='font-roboto font-semibold text-xl '>Workflow Plus</a>
                                        <a className='text-xl my-5'>$<span className='text-5xl'>59</span> /YEARLY <span className='text-green-600 text-xs'>+ 3 MONTH</span></a>
                                        <a className=' h-0.5 mb-5 w-full bg-green-600'></a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Unlimited Clients & Projects</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Invoicing & Payments</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Proposal & Contracts</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Scheduling</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Tasks & Time Tracking</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Forms & Questionnaires</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Expense Tracking</a>
                                        <a className='flex'><TiTick className='text-green-600 text-lg mt-1' />Up to 5 Project Collaborators</a>
                                        <a className=' bg-green-600 text-center text-white mt-12 rounded py-3' href='#'>START FREE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="arrow flex "><img src={arrow} alt="arrow" className='h-1/2 mt-1 ml-2'/></div> */}
                    </div>


                </div>
            </div>

        </>
    )
}

export default PP