import Navbar from "./Navbar"
import ReactPlayer from "react-player"
import HeroDescription from "./HeroDescription"
import startGrid from '../assets/startGrid.png'

export default function Hero() {
    return (
        <div className="relative">
    <div className="w-[60%] h-screen bg-gradient-to-r from-[#E0F5FA] via-[#E0F5FA] to-[#FFFDE6] rounded-br-[3rem] absolute left-0 top-0">
    </div>
    <div className="flex flex-col justify-between relative px-[5%] sm:px-[8%] md:px-[13%] min-h-screen">
        <Navbar />
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-32 mb-36">
            <HeroDescription />
            <div className="relative w-full sm:w-[20rem] md:w-[30rem] h-[20rem] sm:h-[30rem] md:h-[40rem]">
                <ReactPlayer
                    url='https://youtu.be/xOMMV_qXcQ8?si=ZMj_HoyBKFGUsfN0'
                    width='100%'
                    height='100%'
                    className='absolute'
                />
                {/* SVG Icon */}
                <img src={startGrid} alt="Overlay" className="absolute top-[-2.5rem] right-[-5rem] sm:top-[-2rem] sm:right-[-4rem] md:top-[-2.5rem] md:right-[-5rem] h-[10rem] sm:h-[15rem] md:h-[20rem] -z-10"/>
            </div>
        </div>
    </div>
</div>
    )
}