import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";


const Footer = () => {
  return (
    <footer className="w-full bg-white bg-opacity-30 backdrop-blur-sm border-b border-white border-opacity-20 shadow-lg rounded-xl">
    <div className="flex flex-col justify-center items-center pt-1">
      <h4 className='text-md font-medium text-white/70'>©2024 All rights reserved ModUrbana</h4>
      <div className="flex space-x-2 mt-2">
        <a href="https://www.facebook.com" className="transition-transform hover:-translate-y-[5px]">
          <Instagram/>
        </a>
        <a href="https://www.instagram.com" className="transition-transform hover:-translate-y-[5px]">
          <Facebook/>
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer