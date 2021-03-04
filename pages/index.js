import Nav from '../components/nav';
import Link from 'next/link'

export default function Home(){
    return(
        <div className="bg-black w-screen h-screen">
            <div className="container sn:mx-auto px-6">
                <Nav/>
                <div className="py-16">
                    <h1 className="text-3xl font-bold text-gray-title">Desenvolvo projetos incríveis <span className="text-green ">.</span></h1>
                    <h2 className="text-gray-text py-4 leading-relaxed">Aplicações fullstack para web e mobile desde o layout até o código</h2>
                    <img className="py-16" src="https://josepholiveira.dev/_next/static/images/presentation-programmer-c7fa23b9eb3a27b094a594ff5a5ad7e5.svg"/>
                    <Link href="https://github.com/weslley-oliveira">
                        <button className="px-16 rounded mx-auto py-4 bg-purple text-white w-full border-b-4 border-purple-600">Iniciar um projeto</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}