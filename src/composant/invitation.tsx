import React from "react";
import { Link } from "react-router-dom"


function Invitation() {
    return (
        <div>
            <div className='flex justify-center mt-20 mb-5'>
                <img src="/logo_worketyamo.svg" alt="logo_worketyamo" />
            </div>
            <div>
                <h1 className='font-bold text-[1.4rem] '>Finalisation</h1>
                <p className="text-[#71717A]">Inviter 04 amis pour finaliser l’inscription </p>
            </div>
            <div className="mt-5">
                <p className="flex">Numeros de Télephone</p>
                <div className='border-2 border-gray-400 rounded-lg h-10 flex justify-center items-center mt-4'>
                    <input className='border-1 rounded-lg w-full h-full' type="tel" placeholder='Numero whatsapp' />
                </div>
                <div className='border-2 border-gray-400 rounded-lg h-10 flex justify-center items-center mt-4'>
                    <input className='border-1 rounded-lg w-full h-full' type="tel" placeholder='Numero whatsapp' />
                </div>
                <div className='border-2 border-gray-400 rounded-lg h-10 flex justify-center items-center mt-4'>
                    <input className='border-1 rounded-lg w-full h-full' type="tel" placeholder='Numero whatsapp' />
                </div>
                <div className='border-2 border-gray-400 rounded-lg h-10 flex justify-center items-center mt-4'>
                    <input className='border-1 rounded-lg w-full h-full' type="tel" placeholder='Numero whatsapp' />
                </div>
            </div>
            <div className='mt-7'>
                <Link to="/onboarding">
                    <button className="flex justify-center items-center bg-[#00539C] text-white rounded-md w-full h-8" type="button">Creer le compte</button>
                </Link>
            </div>
            <footer className='mt-5 text-[#71717A]'>
                <p>By clicking continue, you agree to our <a className='underline' href="#">Terms of Service</a> and <a className='underline' href="#">Privacy Policy</a>.</p>
            </footer>
            <div>
                <div className='flex justify-between items-center mt-12'>
                    <div className='bg-[#FFA2738F] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                    <div className='bg-[#FFA273] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                    <div className='bg-gradient-to-r from-[#FFA273] to-[#00539C] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                    <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                </div>
            </div>
        </div>
    )
}
export default Invitation