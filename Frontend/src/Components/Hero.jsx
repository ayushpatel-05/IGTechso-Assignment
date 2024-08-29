import Navbar from "./Navbar"

export default function Hero() {
    return (
        <div className="w-[100vw] overflow-x-hidden relative">
             <div className="w-[70%] h-screen bg-gradient-to-r from-[#E0F5FA] via-[#E0F5FA] to-[#FFFDE6] rounded-br-[3rem] absolute left-0 top-0">
            </div>
        <div className=" relative px-[13.5%]">
            <Navbar />
            
        </div>
      </div>
    )
}