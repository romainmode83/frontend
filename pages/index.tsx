// frontend/pages/index.tsx

import Link from 'next/link'
import groq from 'groq'
import client from '../client'

const Index = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className='text-center mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 h-full'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl'> 
        <Link href='/posts' className='
            hover:bg-gradient-to-r hover:bg-clip-text  hover:text-transparent 
            hover:from-gray-800 hover:via-green-700 hover:to-green-300
            hover:animate-text
            hover:cursor-pointer'>  Welcome to  the blog</Link>
            </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className='flex gap-x-8 mt-10 justify-center'>
            <Link 
                className="rounded-md bg-green-400 px-3.5 py-1.5 text-base font-semibold text-white leading-7 shadow-sm hover:bg-green-700 align-middle "
                href='/posts'> Le blog</Link> 
                <Link className='text-base font-semibold py-1.5 leading-7 text-gray-900' href='/about'> En savoir plus <span aria-hidden="true">→</span></Link>
                
        </div>
      </div>
      <div className='mt-10 flex items-center justify-center gap-x-6'></div>
          
    
    </div>
  )
}


export default Index
