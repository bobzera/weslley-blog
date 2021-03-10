import Nav from '../components/nav';
import Btn from '../components/Btn'
import WhoIm from '../components/WhoIm';
import Project from '../components/Project';

export default function Home(){
    return(        
        <div className="container sn:mx-auto px-6">
            <Nav/>
            <div className="flex flex-col justify-between h-screen items-center py-16">
                <div>
                    <h1 className="text-3xl font-bold text-gray-title">Chegou a hora de alavancar suas vendas na internet <span className="text-green ">!</span></h1>
                    <h2 className="text-gray-text py-4 leading-relaxed">Desenvolvimento de sites e aplicações web/mobile seguras, responsivas, de boa navegabilidade, design atrativo e Mobile Friendly</h2>
                </div>
                <img className="w-60 sm:w-96" src="https://josepholiveira.dev/_next/static/images/presentation-programmer-c7fa23b9eb3a27b094a594ff5a5ad7e5.svg"/>
                <Btn 
                text="Ver Projetos"
                href="https://github.com/weslley-oliveira"
                icon="fa fa-github"
                />
            </div>
            <div className="py-20">
                <span className="text-green font-black text-4xl">__</span>
                <h1 className="text-2xl font-bold text-gray-title py-4">Quem sou eu</h1>                               
                <h2 className="text-gray-text pb-4 leading-relaxed">Entusiasta das melhores tecnologias de desenvolvimento web e mobile.</h2>
                <WhoIm/>
            </div>                
            <div className="py-20">
                <span className="text-green font-black text-4xl">__</span>
                <h1 className="text-2xl font-bold text-gray-title py-4">Confira alguns dos projetos desenvolvidos</h1>                               
                <h2 className="text-gray-text pb-4 leading-relaxed">Entusiasta das melhores tecnologias de desenvolvimento web e mobile.</h2>
                <Project/>
            </div>                
        </div>        
    )
}