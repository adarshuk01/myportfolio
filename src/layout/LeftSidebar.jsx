import { Download, Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react'

function LeftSidebar() {
    const data = {
        Languages: [
            { name: "English", level: 100 },
            { name: "Hindi", level: 90 },
            { name: "Malayalam", level: 95 },
        ],
        Skills: [
            { name: "Html", level: 100 },
            { name: "CSS", level: 98 },
            { name: "Js", level: 92 },
            { name: "React.js", level: 98 },
            { name: "Express.js", level: 95 },
            { name: "Node.js", level: 97 },
            { name: "MongoDB", level: 95 },
        ],
         'Extra Skills': [
            { name: "Bootstrap", level: 80 },
            { name: "Tailwind CSS", level: 100 },
            { name: "Git ,GitHub", level: 90 },
        ],
    };

    const socialmedia = [
        {
            icon: <Github stroke='black' fill='' />
        },
        {
            icon: <Linkedin fill strokeWidth={0} />
        },
        {
            icon: <Instagram stroke='#facc15' fill='' />
        },
    ]

    const details=[
        {
            label:'Age',
            value:'25'
        },
        {
            label:'Residence',
            value:'IND'
        }
        ,
        {
            label:'Email address',
            value:'adarsukumar90@gmail.com'
        }
        ,
        {
            label:'Phone no.',
            value:'8606729733'
        }
    ]
    return (
        <div className='p-4 '>
            <div className='flex flex-col justify-center items-center  gap-2'>
                <img className=' rounded-full h-[180px] w-[180px]' src="https://media.istockphoto.com/id/1341046662/vector/picture-profile-icon-human-or-people-sign-and-symbol-for-template-design.jpg?s=612x612&w=0&k=20&c=A7z3OK0fElK3tFntKObma-3a7PyO8_2xxW0jtmjzT78=" alt="" />
                <div>
                    <h1 className='text-xl font-bold'>Adarsh U K</h1>
                    <p className='text-gray-500 text-sm'>WEB DEVELOPER</p>
                </div>
                <div className='flex gap-2'>
                    {socialmedia.map(items => (
                        <span className='bg-yellow-400 p-2 rounded-full text-xs'>{items.icon}</span>
                    ))}
                </div>

            </div>
            <hr className='text-gray-200 my-2' />
            <div>
                {details.map(items=>(
                    <div className='flex flex-col'>
                        <b>{items.label}:</b>
                        <p className='text-gray-500 font-mono'>{items.value}</p>
                    </div>
                ))}

            </div>
                        <hr className='text-gray-200 my-2' />

            <div className="text- max-w-md mx-auto">
                {Object.entries(data).map(([section, items], i) => (
                    <div key={i} className="mb-4">
                        <h2 className="text-lg uppercase font-bold mb-3">{section}</h2>
                        {items.map((item, idx) => (
                            <div key={idx} className="mb-2">
                                <div className="flex justify-between text-sm font-mono text--500">
                                    <span>{item.name}</span>
                                    <span>{item.level}%</span>
                                </div>
                                <div className="w-full border flex items-center border-yellow-400 py-1 rounded-full h-1.5 mt-1">
                                    <div
                                        className="bg-yellow-400 h-1.5 rounded-full"
                                        style={{ width: `${item.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <button className='bg-yellow-400 font-bold text-black w-full p-3 uppercase flex  justify-center gap-2 cursor-pointer'>Download CV <Download/> </button>
        </div>
    )
}

export default LeftSidebar
