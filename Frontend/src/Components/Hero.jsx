import Navbar from "./Navbar"
import ReactPlayer from "react-player"
import HeroDescription from "./HeroDescription"
import startGrid from '../assets/startGrid.png'

export default function Hero() {
    return (
        <div className="w-[100vw] min-w-[100vw] relative">
             <div className="w-[70%] h-screen bg-gradient-to-r from-[#E0F5FA] via-[#E0F5FA] to-[#FFFDE6] rounded-br-[3rem] absolute left-0 top-0">
            </div>
        <div className=" relative px-[13.5%]">
            <Navbar />
            <div className="mt-[170px] flex justify-between">
                <HeroDescription></HeroDescription>
                <div className="relative w-[545px] h-[680px]">
                    <ReactPlayer
                        url='https://youtu.be/xOMMV_qXcQ8?si=ZMj_HoyBKFGUsfN0'
                        width='100%'
                        height='100%'
                    />
                    {/* SVG Icon */}
                    <img src={startGrid} alt="Overlay" className="absolute -top-[28px] -right-20 w-[302px] h-[348px] -z-10"/>
                </div>
            </div>
        </div>
      </div>
    )
}