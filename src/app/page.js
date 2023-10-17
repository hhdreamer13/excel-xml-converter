/* eslint-disable react/no-unescaped-entities */
import ConverterDisplay from "@/components/ConverterDisplay";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-20'>
      <div className='z-10 max-w-5xl items-center justify-center font-bold font-literata text-2xl w-fit mb-20'>
        <p className='fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b rounded-lg from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:p-4'>
          Convertisseur de fichier Excel à Moodle XML
        </p>
      </div>
      <ConverterDisplay />
      <div className='mb-20 flex text-left mx-auto justify-center items-start gap-2 lg:max-w-5xl lg:w-full'>
        <a
          href='/qcm_modele.xlsx'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Modèle Excel{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[25ch] text-sm opacity-50`}>
            Téléchargez le fichier modèle Excel et remplissez avec vos
            questions.
          </p>
        </a>
        <Link
          href='/faq'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            FAQ{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[25ch] text-sm opacity-50`}>
            Consultez le FAQ pour mieux comprendre comment utiliser ce service.
          </p>
        </Link>

        <a
          href='/'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tutoriel{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[25ch] text-sm opacity-50`}>
            Suivez le tutoriel étape par étape pour intégrer le fichier converti
            dans Agorassas.
          </p>
        </a>
      </div>
      <Footer />
    </main>
  );
}
