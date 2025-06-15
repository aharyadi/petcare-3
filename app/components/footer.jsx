import Image from 'next/image';
import Link from 'next/link';
import { FaBehance, FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-10 pb-5">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="bg-black text-white p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Image
              src="/assets/logo-white.svg"
              alt="Petcare Logo"
              width={106}
              height={30}
              priority
            />
            <p>2025 Petcare, All right reserved</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-center">
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
            <Link href="/service" className="text-white hover:underline">
              Our Services
            </Link>
            <Link href="/gallery" className="text-white hover:underline">
              Gallery
            </Link>
            <Link href="/about" className="text-white hover:underline">
              About Us
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href="#" className='bg-primary p-2 rounded-xl group flex justify-center drop-shadow-xl from-gray-800 text-white font-medium hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'>
              <FaInstagram className='h-6 w-6 text-black' />
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
              >
                Instagram
              </span>
            </Link>
            <Link href="#" className='bg-primary p-2 rounded-xl group flex justify-center drop-shadow-xl from-gray-800 text-white font-medium hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'>
              <FaDribbble className='h-6 w-6 text-black' />
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
              >
                Dribbble
              </span>
            </Link>
            <Link href="#" className='bg-primary p-2 rounded-xl group flex justify-center drop-shadow-xl from-gray-800 text-white font-medium hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'>
              <FaBehance className='h-6 w-6 text-black' />
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
              >
                Behance
              </span>
            </Link>
            <Link href="#" className='bg-primary p-2 rounded-xl group flex justify-center drop-shadow-xl from-gray-800 text-white font-medium hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'>
              <FaLinkedinIn className='h-6 w-6 text-black' />
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
              >
                LinkedIn
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
