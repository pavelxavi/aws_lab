import React from "react";
import { Link } from "react-router-dom"

function Inscription() {
    return (
        <div>
            <div className='flex justify-center m-10'>
                <img src="/logo_worketyamo.svg" alt="logo_worketyamo" />
            </div>
            <div>
                <h1 className='font-bold text-[1.4rem] '>Creation de compte</h1>
                <p className="text-[#71717A]">Rentrez vos infos pour creer votre compte .</p>
            </div>
            <div className='mt-5'>
                <h1 className='flex'>Email</h1>
                <div className='border-2 border-gray-400 rounded-lg h-10 flex justify-center items-center'>
                    <input className='border-1 rounded-lg w-full h-full' type="text" placeholder='abc@example.com' />
                </div>
            </div>
            <div className='mt-3'>
                <h1 className='flex'>Mot de passe</h1>
                <div className='border-2 border-gray-400 rounded-lg  h-10 flex justify-center items-center'>
                    <input className='border-1 rounded-lg w-full h-full' type="text" placeholder='***************' />
                </div>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <div className='bg-[#00539C] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
            </div>
            <div className='flex justify-center items-center mt-3'>
                <hr className="h-[1.5px] flex-1 border-0 bg-gray-400" />
                <h2 className='flex-1 w-[7rem] h-5 text-[#71717A]'>
                    <p>OU AVEC</p>
                </h2>
                <hr className="h-[1.5px] flex-1 border-0 bg-gray-400" />
            </div>
            <div className='border-2 border-gray-300 rounded-sm flex justify-center items-center mt-5'>
                <div className='gap-2 flex justify-center items-center'>
                    <a href="#"><img src="/github-logo.svg" alt="github" /></a>
                    <a href="#">Github</a>
                </div>
            </div>
            <div className='border-2 border-gray-300 rounded-sm flex justify-center items-center  mt-3'>
                <div className='gap-2 flex justify-center items-center'>
                    <a href="#"><img src="/Google.svg" alt="Google" /></a>
                    <a href="#">Google</a>
                </div>
            </div>
            <div className='mt-5'>
                <Link to="/verification">
                    <button className="flex justify-center items-center bg-[#00539C] text-white rounded-md w-full h-8 " type="button">Creer le compte</button>
                </Link>
            </div>
            <footer className='mt-3 text-[#71717A]'>
                <p>By clicking continue, you agree to our <a className='underline' href="#">Terms of Service</a> and <a className='underline' href="#">Privacy Policy</a>.</p>
            </footer>
            <div>
                <div className='flex justify-between items-center mt-12'>
                    <div className='bg-[#FFA273] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                    <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                    <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                    <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                </div>
            </div>
        </div>
    )
}

export default Inscription