import React from 'react'

function Project({children,title,content}) {
    return (
        <div className="bg-black-light text-gray-title flex flex-col p-4 pt-16 rounded-md">
            <img className="" src="https://raw.githubusercontent.com/weslley-oliveira/OnOff/013c00c6398b90a272adc8a34d381969aba0a635/.github/onOff.svg" alt="Weslley Oliveira"/>
            <div className="grid grid-cols-12 py-2">
                <span className="text-gray-text text-sm pr-2 col-span-4 text-right">Nome</span><h1 className="text-2xl font-semibold text-left col-span-8"> On/Off</h1>
            </div>
            <div className="grid grid-cols-12 py-2">
                <span className="text-gray-text text-sm pr-2 col-span-4 text-right">Descricao</span> <h2 className="col-span-8 text-sm"> Exercitation culpa aliquip dolore do voluptate eu non aute cillum sint nisi do esse et. Quis aute excepteur magna labore voluptate tempor ex deserunt. Magna sit laborum cillum adipisicing magna. Nulla ut aute aliqua fugiat ut laborum labore sunt ad nulla pariatur cupidatat. Nostrud ex ad velit est sit duis in ut. Dolor dolor exercitation sit et enim est ex elit consequat eu.</h2> 
            </div>
            <div className="grid grid-cols-12 py-4 pb-8">
                <span className="text-gray-text text-sm pr-2 col-span-4 text-right">Tecnologias</span>
                <div className="col-span-8 grid grid-cols-3 gap-4">
                    <img src="/icon/nextjs.svg" alt="Next Js"/>
                    <img src="/icon/reactjs.svg"/>
                    <img src="/icon/html5.svg"/>
                    <img src="/icon/css3.svg"/>
                    <img src="/icon/typescript.svg"/>
                </div>     
            </div>
            
            <div className="grid grid-cols-12 pt-4 items-center justify-items-center border-t border-gray-600 ">

            <img src="https://camo.githubusercontent.com/40b4bc836ac5a7f2a271dce3a72ce3ba8071cda0ff49fcdc3ef7ce014b38ff80/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d6c6963656e7365266d6573736167653d4d495426636f6c6f723d353936354530266c6162656c436f6c6f723d313231323134"
            className="col-span-6"
            />
            <div className="col-span-6">
            
                <a className="text-green cursor-pointer" src="https://on-off.vercel.app/">Ver Projeto Online</a>
            </div>
            
            </div>
            
                
        </div>
    )
}

export default Project
 