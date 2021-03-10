import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';

function WhoIm() {
    return (
        <div className="bg-black-light text-gray-title flex flex-col items-center p-4 py-16 rounded-md text-center">
            <img className="w-40 rounded-full" src="https://github.com/weslley-oliveira.png" alt="Weslley Oliveira"/>
            <h1 className="py-4 text-2xl font-semibold">Weslley Oliveira</h1>
            <h2 className="py-2"> Software Engineer | Web Developer | Freelancer</h2> 
            <p className="text-gray-text py-4 text-sm "><LocationOnIcon fontSize="small"/> London, United Kingdom</p>
            <div className="flex gap-2 pt-6">
                <img src="/icon/nextjs.svg"/>
                <img src="/icon/reactjs.svg"/>
                <img src="/icon/html5.svg"/>
                <img src="/icon/css3.svg"/>
                <img src="/icon/typescript.svg"/>
            </div>       
        </div>
    )
}

export default WhoIm
