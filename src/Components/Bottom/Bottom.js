import React from 'react'
import './Bottom.css'

const Bottom = () => {
    return (
        <>

            {/* Top */}
            <div className="bottom-top">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <a className='font-roboto flex text-2xl font-semibold'>Super charge your work with add-ons</a>
                    </div>
                    <div className="flex justify-center">
                        <div className=" shadow-md flex  mt-10 px-10 py-3">
                            <div className="flex flex-col">
                                <a className='font-roboto font-semibold text-2xl'>Collaborates</a>
                                <a className=' text-sm'>Invite others to project for limited access and functionality</a>
                            </div>
                            <div className="flex">
                                <a className='text-3xl ml-96 mt-1'>Free</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className=" shadow-md flex mt-10 px-10 py-3">
                            <div className="flex flex-col">
                                <a className='font-roboto font-semibold text-2xl'>Partners</a>
                                <a className=' text-sm'>Invite others to project for full access and functionality</a>
                            </div>
                            <div className="flex flex-col ml-6">
                                <a className='text-3xl text-center ml-96 '>$9</a>
                                <a className='text-sm ml-96 '>/MONTH</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className=" shadow-md flex mt-10 px-10 py-3">
                            <div className="flex flex-col">
                                <a className='font-roboto font-semibold text-2xl'>Collaborates</a>
                                <a className=' text-sm'>Invite others to project for limited access and functionality</a>
                            </div>
                            <div className="flex flex-col ">
                                <a className='text-3xl text-center ml-96 '>$10</a>
                                <a className='text-sm ml-96 '>/MONTH</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle */}
            <div className="bottom-mid">
                <div className="flex justify-center mt-36">
                    <div className="flex bg-green-50 p-20 rounded-sm">
                        <div className="font-roboto flex flex-col">
                            <a className='text-3xl'>It's <span className='text-green-600'>your</span> business.</a>
                            <a className='text-3xl'>We're here to help it grow.</a>
                        </div>
                        <div className="flex py-3 ml-56">
                            <button className=' bg-green-600 text-white px-10 rounded-sm'>START FREE</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* end */}
            <div className="bottom-end">
                <div className="flex justify-center">
                    <a className='text-3xl mt-32'>Frequently Asked Question</a>
                </div>
                <div className="bottom-acc">
                    <ul class="accordion">
                        <li>
                            <input type="checkbox" class="accordion" id="first" />
                            <label for="first">How does 14 days free trail works ?</label>
                            <div class="content">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore blanditiis excepturi odio ipsam
                                    ea itaque modi ut molestias, earum explicabo, delectus, laborum similique tempore quam rem! Iusto
                                    est doloribus quis id neque temporibus ullam aspernatur, odit, quo unde dignissimos sequi veritatis
                                    molestias tempora quia animi blanditiis commodi expedita recusandae. Suscipit.</p>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" class="accordion" id="secound" />
                            <label for="secound">Can I change my plan anytime ?</label>
                            <div class="content">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore blanditiis excepturi odio ipsam
                                    ea itaque modi ut molestias, earum explicabo, delectus, laborum similique tempore quam rem! Iusto
                                    est doloribus quis id neque temporibus ullam aspernatur, odit, quo unde dignissimos sequi veritatis
                                    molestias tempora quia animi blanditiis commodi expedita recusandae. Suscipit.</p>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" class="accordion" id="third" />
                            <label for="third">what is refund policy ?</label>
                            <div class="content">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore blanditiis excepturi odio ipsam
                                    ea itaque modi ut molestias, earum explicabo, delectus, laborum similique tempore quam rem! Iusto
                                    est doloribus quis id neque temporibus ullam aspernatur, odit, quo unde dignissimos sequi veritatis
                                    molestias tempora quia animi blanditiis commodi expedita recusandae. Suscipit.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Bottom