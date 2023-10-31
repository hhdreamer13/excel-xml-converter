/* eslint-disable react/no-unescaped-entities */
import ConverterDisplay from "@/components/ConverterDisplay";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='items-center justify-center w-full mb-20'>
        <h1 className=' w-full mx-auto text-center justify-center font-bold text-2xl sm:text-5xl rounded-lg pb-6 pt-14 sm:pt-8'>
          QCM Convertisseur
        </h1>
        <p className='w-80 sm:w-[30rem] mx-auto text-center font-semibold'>
          Bienvenue sur le convertisseur Excel à Moodle XML (QCM)
        </p>
        {/* <p className='w-80 sm:w-2/3 mx-auto text-center opacity-50'>
          Commencez par télécharger le modèle Excel ci-dessous, remplissez-le
          avec vos questions et réponses, puis téléversez-le ici pour obtenir
          votre fichier Moodle XML.
        </p> */}
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
        <div className='mb-6'>
          <ConverterDisplay />
        </div>
        <div className='mb-20 flex text-left mx-auto justify-center items-start gap-2 w-80 sm:max-w-5xl sm:w-full'>
          <a
            href='/qcm_modele.xlsx'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={`mb-3 text-lg sm:text-2xl font-semibold`}>
              Modèle Excel{" "}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[25ch] text-sm opacity-50 hidden sm:block`}
            >
              Téléchargez le fichier modèle Excel et remplissez avec vos
              questions.
            </p>
          </a>
          <Link
            href='/faq'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100'
          >
            <h2 className={`mb-3 text-lg sm:text-2xl font-semibold`}>
              Foire aux questions{" "}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[25ch] text-sm opacity-50 hidden sm:block`}
            >
              Consultez la FAQ pour mieux comprendre comment utiliser ce
              service.
            </p>
          </Link>

          <a
            href='https://youtu.be/LWfh8BtPpQ8'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={`mb-3 text-lg sm:text-2xl font-semibold`}>
              Tutoriel vidéo{" "}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[25ch] text-sm opacity-50 hidden sm:block`}
            >
              Suivez le tutoriel étape par étape pour intégrer le fichier
              converti dans Agorassas.
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
