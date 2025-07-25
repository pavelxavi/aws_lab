import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='flex justify-center m-5'>
        <img src="/logo_worketyamo.svg" alt="logo_worketyamo" />
      </div>
      <div>
        <h1 className='font-bold text-[1.4rem] '>Creation de compte</h1>
        <p>Rentrez vos infos pour creer votre compte .</p>
      </div>
      <div className='mt-5'>
        <h1 className='flex'>Email</h1>
        <div className='border-2 border-gray-400 rounded-lg h-10 flex justify-center items-center'>
          <input className='border-1 rounded-sm w-[17rem]' type="text" placeholder='abc@example.com' />
        </div>
      </div>
      <div className='mt-3'>
        <h1 className='flex'>Mot de passe</h1>
        <div className='border-2 border-gray-400 rounded-lg  h-10 flex justify-center items-center'>
          <input className='border-1 rounded-sm w-[17rem]' type="text" placeholder='***************' />
        </div>
      </div>
      <div className='flex justify-between items-center mt-3'>
        <div className='bg-[#00539C] h-2 w-[5rem] rounded-full'><h1> </h1></div>
        <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
        <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
        <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
      </div>
      <div className='flex'>
        <div className='flex items-center'><p>.............................</p></div>
        <div className='flex items-center justify-center mt-3 w-[7rem] h-5'>
          <p>OU AVEC</p>
        </div>
        <div className='flex items-center'><p>.............................</p></div>
      </div>
      <div className='border-2 border-gray-300 rounded-sm flex justify-center items-center mt-5'>
        <div className='gap-2 flex'>
          <img src="/github-logo.svg" alt="github" />
          <p>Github</p>
        </div>
      </div>
      <div className='border-2 border-gray-300 rounded-sm flex justify-center items-center mt-3'>
        <div className='gap-2 flex'>
          <img src="/Google.svg" alt="Google" />
          <p>Google</p>
        </div>
      </div>
      <div className='flex justify-center items-center bg-[#00539C] text-white rounded-md mt-5'>
        <h1>Creer le compte</h1>
      </div>
      <footer className='mt-3'>
        <p>By clicking continue, you agree to our <a className='underline' href="#">Terms of Service</a> and <a className='underline' href="#">Privacy Policy</a>.</p>
        <div className='flex justify-between items-center mt-12'>
          <div className='bg-[#FFA273] h-2 w-[5rem] rounded-full'><h1> </h1></div>
          <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
          <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
          <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
        </div>
      </footer>
    </div>
  )
}

export default App
