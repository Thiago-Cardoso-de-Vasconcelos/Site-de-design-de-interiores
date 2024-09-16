import Image from 'next/image';
import HeroBanner from '@/public/hero.png';

const Hero = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 h-full md:min-h-[600px]'>
        {/* text section */}
        <div className='flex flex-col pt-20  justify-center text-center md:text-left px-5 pr-10'>
          <h1 className='font-bold text-3xl py-4'>
            ESBOÇO DE DESIGN DE INTERIORES DE LUXO
          </h1>
          <p className='text-sm text-gray-500'>
            Dê vida à casa dos seus sonhos com ajuda de design exclusiva e
            produtos escolhidos a dedo, adaptados ao seu estilo, espaço e
            orçamento.
          </p>
          <div className='flex gap-5 my-10 w-full justify-center md:justify-start'>
            <button className='segundry-btn  uppercase '>começar</button>
            <button className='primary-btn uppercase'>Contato</button>
          </div>
        </div>

        {/* images section  */}
        <div className='flex flex-col items-center justify-center'>
          <Image
            src={HeroBanner}
            alt='Hero'
            className=' w-[80%] object-cover md:w-[600px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
