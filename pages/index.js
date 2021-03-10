import Nav from '../components/nav';
import Link from 'next/link'

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
                <Link href="https://github.com/weslley-oliveira">
                    <button className="rounded mx-auto my-8 py-4 bg-purple text-opacity-80 text-white w-full border-b-4 border-purple-600">
                        <span className="text-2xl pr-2 opacity-80"><i class="fa fa-github" aria-hidden="true"></i> </span>
                        Ver Projetos
                    </button>
                </Link>
            </div>                
        </div>        
    )
}