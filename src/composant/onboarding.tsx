import React from "react";

function Onboarding() {
    return (
        <div>
            <div className='flex justify-center mt-16 mb-5'>
                <img src="/logo_worketyamo.svg" alt="logo_worketyamo" />
            </div>
            <div>
                <h1 className='font-bold text-[1.4rem] '>Bienvenue</h1>
                <p className="text-[#71717A]">Plus que 3 petites minutes ........</p>
            </div>
            <div className="mt-8 flex justify-center items-center relative">
                <img className=" z-1 w-full " src="/imag video.svg" alt="imag video" />
                <a className="z-2 absolute" href="#"><img src="/play.svg" alt="play" /></a>
            </div>
            <div className='mt-7'>
                <button className="flex justify-center items-center bg-[#00539C] text-white rounded-md w-full h-8" type="button">Creer le compte</button>
            </div>
            <footer className='mt-5'>
                <p className="text-[#71717A]">By clicking continue, you agree to our <a className='underline' href="#">Terms of Service</a> and <a className='underline' href="#">Privacy Policy</a>.</p>
            </footer>
            <div>
                <div className='flex justify-between items-center mt-12'>
                    <div className='bg-[#FFA2738F] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                    <div className='bg-[#FFA273] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                    <div className='bg-gradient-to-r from-[#FFA273] to-[#00539C] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                    <div className='bg-[#00539C] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                </div>
            </div>
        </div>
    )
}
export default Onboarding