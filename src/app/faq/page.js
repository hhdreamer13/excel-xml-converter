/* eslint-disable react/no-unescaped-entities */
import Faq from "@/components/Faq";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className='items-center justify-center w-full mb-20'>
      <div className=''>
        <Link href='/'>
          <h1 className='w-full mx-auto text-center justify-center font-bold text-2xl sm:text-5xl rounded-lg pb-6 pt-14 sm:pt-8'>
            QCM Convertisseur
          </h1>
        </Link>

        <p className='w-80 sm:w-[30rem] mx-auto text-center opacity-50'>
          Bienvenue sur le convertisseur Excel à XML Moodle (QCM)
        </p>
      </div>
      <div className='isolate bg-white flex flex-col justify-center items-center'>
        <div
          className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
          aria-hidden='true'
        >
          <div
            className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/* Back button */}
        <div className='w-full mt-10 text-left lg:max-w-5xl lg:w-full'>
          <Link href='/' className='btn btn-ghost px-3 py-1'>
            <Image
              src='/return.svg'
              alt='Retour'
              width={30}
              height={30}
              className='dark:invert'
            />
          </Link>
        </div>
        <div className='mb-10 flex text-left mx-auto justify-center items-start gap-2 lg:max-w-5xl lg:w-full'>
          <Faq />
        </div>
      </div>
    </div>
  );
}
