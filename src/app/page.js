/* eslint-disable react/no-unescaped-entities */
import ConverterDisplay from "@/components/ConverterDisplay";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-0 sm:p-10'>
      <div className='max-w-5xl items-center justify-center w-fit mb-20'>
        <h1 className='left-0 top-0 flex w-full justify-center font-bold text-2xl sm:text-5xl font-literata rounded-lg pb-6 pt-8 dark:from-inherit lg:w-auto lg:p-4'>
          Excel à Moodle XML
        </h1>
        <p className='w-80 sm:w-[30rem] mx-auto text-center font-semibold'>
          Bienvenue sur le convertisseur Excel à Moodle XML (QCM)
        </p>
        <p className='w-80 sm:w-2/3 mx-auto text-center opacity-50'>
          Commencez par télécharger le modèle Excel ci-dessous, remplissez-le
          avec vos questions et réponses, puis téléversez-le ici pour obtenir
          votre fichier Moodle XML.
        </p>
      </div>
      <div>
        <ConverterDisplay />
      </div>
      <div className='mb-20 flex text-left mx-auto justify-center items-start gap-2 w-80 sm:max-w-5xl sm:w-full'>
        <a
          href='/qcm_modele.xlsx'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-lg sm:text-2xl font-semibold`}>
            Modèle Excel{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[25ch] text-sm opacity-50 hidden sm:block`}>
            Téléchargez le fichier modèle Excel et remplissez avec vos
            questions.
          </p>
        </a>
        <Link
          href='/faq'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        >
          <h2 className={`mb-3 text-lg sm:text-2xl font-semibold`}>
            Foire aux questions{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[25ch] text-sm opacity-50 hidden sm:block`}>
            Consultez la FAQ pour mieux comprendre comment utiliser ce service.
          </p>
        </Link>

        <a
          href='https://youtu.be/LWfh8BtPpQ8'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-lg sm:text-2xl font-semibold`}>
            Tutoriel vidéo{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[25ch] text-sm opacity-50 hidden sm:block`}>
            Suivez le tutoriel étape par étape pour intégrer le fichier converti
            dans Agorassas.
          </p>
        </a>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
