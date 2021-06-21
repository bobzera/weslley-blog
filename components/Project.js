import React from 'react'

function Project({children,name,img,describe,link}) {
    return (
        <div className="bg-black-light text-gray-title flex flex-col p-4 pt-16 my-16 rounded-md">
            <img className="" src={img}
            alt="Weslley Oliveira"/>
            <div className="grid grid-cols-12 py-2">
                <span className="text-gray-text text-sm pr-2 col-span-4 text-right">
                    Nome
                </span>
                <h1 className="text-2xl font-semibold text-left col-span-8">{name}</h1>
            </div>
            <div className="grid grid-cols-12 py-2">
                <span className="text-gray-text text-sm pr-2 col-span-4 text-right">Descricao</span> 
                <h2 className="col-span-8 text-sm">{describe}</h2> 
            </div>
            <div className="grid grid-cols-12 py-4 pb-8">
                <span className="text-gray-text text-sm pr-2 col-span-4 text-right">Tecnologias</span>
                <div className="col-span-8 grid grid-cols-3 gap-4">
                    {children}
                </div>     
            </div>
            
            <div className="grid grid-cols-12 pt-4 items-center justify-items-center border-t border-gray-600 ">

            <img src="https://camo.githubusercontent.com/40b4bc836ac5a7f2a271dce3a72ce3ba8071cda0ff49fcdc3ef7ce014b38ff80/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d6c6963656e7365266d6573736167653d4d495426636f6c6f723d353936354530266c6162656c436f6c6f723d313231323134"
            className="col-span-6"
            />
            <div className="col-span-6">
            
                <a className="text-green cursor-pointer" href={link}>Ver Projeto Online</a>
            </div>
            
            </div>
            
                
        </div>
    )
}

export default Project
 