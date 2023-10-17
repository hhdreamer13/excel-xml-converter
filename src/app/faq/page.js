/* eslint-disable react/no-unescaped-entities */
import Faq from "@/components/Faq";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-20'>
      <div className='z-10 max-w-5xl items-center justify-center font-bold font-literata text-2xl w-fit mb-20'>
        <p className='fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b rounded-lg from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:p-4'>
          Convertisseur de fichier Excel à Moodle XML
        </p>
      </div>
      {/* Back button */}
      <div className='w-full text-left'>
        <Link
          href='/'
          className='btn border border-gray-300 hover:border-gray-400'
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
