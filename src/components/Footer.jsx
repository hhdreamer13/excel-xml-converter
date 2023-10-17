import Image from "next/image";

const Footer = () => {
  return (
    <footer className='group bottom-0 mb-5 w-fit sm:w-full font-titre text-2xl font-caveat'>
      <div className=''>
        <a href='https://www.hhdev.pro/' rel='noreferrer' target='_blanc'>
          <span className='flex items-center justify-center drop-shadow-2xl'>
            Créé avec
            <span className='mx-2'>
              <Image
                src='/pixel.png'
                alt='heart'
                title="d'amour"
                className='h-7 w-7 grayscale transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:grayscale-0 group-hover:saturate-150'
                width={30}
                height={30}
              />
            </span>
            par Hooman
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
