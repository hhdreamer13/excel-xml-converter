/* eslint-disable react/no-unescaped-entities */
import Faq from "@/components/Faq";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-10'>
      <div className='z-10 max-w-5xl items-center justify-center w-fit mb-20'>
        <Link href='/'>
          <h1 className='fixed left-0 top-0 flex w-full justify-center font-bold text-5xl font-literata rounded-lg pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:p-4'>
            Excel à Moodle XML
          </h1>
        </Link>

        <p className='w-[30rem] mx-auto text-center font-semibold'>
          Bienvenue sur le convertisseur Excel à Moodle XML (QCM)
        </p>
      </div>
      {/* Back button */}
      <div className='w-full text-left lg:max-w-5xl lg:w-full'>
        <Link
          href='/'
          className='btn border border-gray-300 hover:border-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700'
        >
          <Image
            src='/return.svg'
            alt='Retour'
            width={20}
            height={20}
            className=''
          />
        </Link>
      </div>
      <div className='mb-20 flex text-left mx-auto justify-center items-start gap-2 lg:max-w-5xl lg:w-full'>
        <Faq />
      </div>
    </main>
  );
}
