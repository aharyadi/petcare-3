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
            <Link href="#" className='bg-primary p-2 rounded-xl'>
              <FaInstagram className='h-6 w-6 text-black'/>
            </Link>
            <Link href="#" className='bg-primary p-2 rounded-xl'>
              <FaDribbble className='h-6 w-6 text-black'/>
            </Link>
            <Link href="#" className='bg-primary p-2 rounded-xl'>
              <FaBehance className='h-6 w-6 text-black'/>
            </Link>
            <Link href="#" className='bg-primary p-2 rounded-xl'>
              <FaLinkedinIn className='h-6 w-6 text-black'/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
