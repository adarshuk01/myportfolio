import { ArrowBigRightDash } from 'lucide-react'

import React from 'react'

function HeroSec() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-fit mx-auto'>
            <div className='flex flex-col gap-2'>
                <h1 className=' uppercase font-mono text-3xl'>I’m Adarsh  <br />
                    <b className='text-yellow-400 uppercase text-5xl'>Web Developer</b>  </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eaque veniam laborum blanditiis mollitia facere voluptates aperiam doloremque, voluptatibus explicabo inventore adipisci sequi cupiditate aliquam.</p>
                <button className='bg-yellow-400 text-black flex gap-2 py-2 w-fit  px-3 mt-8'>HIRE ME <ArrowBigRightDash /> </button>
            </div>
            <div>
                <img className='w-full' src="/myportfolio/heroimg2.png" alt="" />

            </div>

        </div>
    )
}

export default HeroSec
