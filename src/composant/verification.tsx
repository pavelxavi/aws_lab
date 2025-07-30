import { Link } from "react-router-dom"

function Verification() {
    return (
        <div>
            <div className='flex justify-center mt-44 mb-10'>
                <img src="/logo_worketyamo.svg" alt="logo_worketyamo" />
            </div>
            <div>
                <h1 className='font-bold text-[1.4rem] '>Verification OTP</h1>
                <p className="text-[#71717A]">Rentrez vos infos pour vous connecter .</p>
            </div>
            <div className="mt-5 flex justify-center gap-5 items-center">
                <div><input className="w-10 h-10 flex flex-1 justify-center items-center border-2 border-gray-400 rounded-lg" type="tel" /></div>
                <div><input className="w-10 h-10 flex flex-1 justify-center items-center border-2 border-gray-400 rounded-lg" type="tel" /></div>
                <div><input className="w-10 h-10 flex flex-1 justify-center items-center border-2 border-gray-400 rounded-lg" type="tel" /></div>
                <div><input className="w-10 h-10 flex flex-1 justify-center items-center border-2 border-gray-400 rounded-lg" type="tel" /></div>
            </div>
            <div className='mt-5'>
                <Link to="/invitation">
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
                    <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                    <div className='bg-[#D9D9D9] h-2 w-[5rem] rounded-full'><h1> </h1></div>
                </div>
            </div>
        </div>
    )
}

export default Verification