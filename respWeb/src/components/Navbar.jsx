import { useEffect, useState } from "react"
import {assets} from "../../assets/assets.js"
const Navbar = () => {
    const [showmobmenu, setshoemobmenu] = useState(false);

    useEffect(() => {
        if(showmobmenu) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showmobmenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
            <img src={assets.logo} alt="" />
            <ul className="hidden md:flex gap-7 text-white ">
                <a href="#header" className="cursor-pointer hover: Text-gray-400">Home</a>
                <a href="#about" className="cursor-pointer hover: Text-gray-400">About</a>
                <a href="#projects" className="cursor-pointer hover: Text-gray-400">Projects</a>
                <a href="#testimonial" className="cursor-pointer hover: Text-gray-400">Testimonials</a>
            </ul>
            <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign Up</button>
            <img src={assets.menu_icon} onClick = {() => setshoemobmenu(true)} className="md:hidden w-7 cursor-pointer" alt="" />
        </div>
        <div className={`md:hidden  ${ showmobmenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className="flex justify-end p-6 cursor-pointer">
                <img src={assets.cross_icon} onClick = {() => setshoemobmenu(false)} className="w-6" alt="" />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                <a href="#header" className="px-4 py-2 inline-block rounded-full">Home</a>
                <a href="#about" className="px-4 py-2 inline-block rounded-full">About</a>
                <a href="#projects" className="px-4 py-2 inline-block rounded-full">Projects</a>
                <a href="#testimonial" className="px-4 py-2 inline-block rounded-full">testimonials</a>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
