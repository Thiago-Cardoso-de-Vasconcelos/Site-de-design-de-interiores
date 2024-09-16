'use client';
import Logo from '@/public/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NavLinks = [
  {
    id: 1,
    title: 'Sobre',
    link: '#',
  },
  {
    id: 2,
    title: 'Serviços',
    link: '#',
  },
  {
    id: 3,
    title: 'Projetos',
    link: '#',
  },
  {
    id: 4,
    title: 'Contato',
    link: '#',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='md:container flex justify-between content-center relative py-4'>
      {/* Logo section  */}
      <div className='flex items-center gap-1 px-4'>
        <Image src={Logo} alt='Logo' width={20} height={20} />
        <span className='text-2xl font-bold'>Interior</span>
      </div>

      {/* Menu Hambúrguer  */}

      <div className='md:hidden px-4'>
        <button
          onClick={toggleMenu}
          type='button'
          className='text-black focus:outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Links - Exibidos em telas maiores */}
      {/* Link section  */}
      <div className='hidden md:flex'>
        {NavLinks.map((link) => {
          return (
            <Link
              href={link.link}
              key={link.id}
              className='mx-4 text-sm font-semibold content-center'>
              {link.title}
            </Link>
          );
        })}
      </div>

      {/* Button section  */}
      <div className='hidden md:flex'>
        <button className='text-sm lg:text-base border-2 border-black px-4 py-2 shadow-[5px_5px_0px_0px]'>
          Experimente Grátis
        </button>
      </div>

      {/* Links - Exibidos no menu hambúrguer */}
      {isOpen && (
        <div className='md:hidden absolute top-16 w-full border-b-8  border-black pb-10 bg-zinc-200'>
          {/* style={{ height: 'calc(100vh - 64px)' }} */}
          <div className='flex flex-col m-auto justify-center content-center text-center gap-5 my-9'>
            {NavLinks.map((link) => {
              return (
                <Link
                  href={link.link}
                  key={link.id}
                  className='mx-4 text-sm font-semibold content-center'>
                  {link.title}
                </Link>
              );
            })}
          </div>

          <div className='flex justify-center'>
            <button className='text-sm lg:text-base border-2 border-black px-4 py-2 shadow-[5px_5px_0px_0px]'>
              Experimente Grátis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
