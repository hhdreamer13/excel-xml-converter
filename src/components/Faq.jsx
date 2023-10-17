import Image from "next/image";
import screenshot from "/qcm.jpeg";

/* eslint-disable react/no-unescaped-entities */
const Faq = () => {
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold text-xl m-4 underline'>
        Foire Aux Questions
      </h2>
      <div className='join join-vertical w-full'>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Qu'est-ce que ce site fait ?
          </div>
          <div className='collapse-content text-zinc-600'>
            <p>
              Cette web app convertit vos fichiers Excel contenant des questions
              à choix multiples (QCM) en fichiers XML compatibles avec Moodle.
            </p>
          </div>
        </div>

        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Comment ça marche ?
          </div>
          <div className='collapse-content text-zinc-600'>
            <ol className='list-decimal	ml-4 flex flex-col gap-3'>
              <li>
                <span className='font-bold block'>
                  Télécharger le modèle Excel :
                </span>{" "}
                Utilisez le{" "}
                <a
                  href='/qcm_modele.xlsx'
                  download
                  className='text-green-600 hover:text-green-500'
                >
                  modèle Excel
                </a>{" "}
                pour créer votre QCM.
              </li>
              <li>
                <span className='font-bold block'>Remplir le modèle :</span>{" "}
                Saisissez vos questions et réponses dans les colonnes
                appropriées.
              </li>
              <li>
                <span className='font-bold block'>Parcourir le fichier :</span>{" "}
                Déposez le fichier Excel rempli sur le site.
              </li>
              <li>
                <span className='font-bold block'>Conversion :</span> Cliquez
                sur "Convertir le fichier" et attendez la fin du processus de
                conversion.{" "}
              </li>
              <li>
                <span className='font-bold block'>
                  Télécharger le fichier XML :
                </span>{" "}
                Une fois la conversion terminée, un lien de téléchargement du
                fichier XML sera généré.
              </li>
            </ol>
          </div>
        </div>

        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            J'ai déjà un QCM sur Word/PDF. Que devrais-je faire ?
          </div>
          <div className='collapse-content text-zinc-600'>
            <p>
              Si vous avez déjà un QCM dans un format autre qu'Excel, il
              faudrait copier-coller les questions et les réponses dans le{" "}
              <a
                href='/qcm_modele.xlsx'
                download
                className='text-green-600 hover:text-green-500'
              >
                modèle Excel
              </a>
              .
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Y a-t-il des limitations à connaître ?
          </div>
          <div className='collapse-content text-zinc-600'>
            <p>
              Pour le moment, ce service ne convertit que des QCM avec
              exactement{" "}
              <span className='underline font-semibold'>trois choix</span> de
              réponse (A, B, et C). Si votre question a moins de trois choix, le
              troisième choix apparaîtra vide lors du test.
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Y a-t-il des consignes spéciales pour remplir le modèle Excel ?
          </div>
          <div className='collapse-content text-zinc-600'>
            <p className='mb-3'>Oui, veuillez suivre ces règles :</p>
            <ul className='list-disc ml-4 flex flex-col gap-3'>
              <li>
                <span className='font-bold block'>Colonne Question :</span>{" "}
                Saisissez uniquement le texte de la question, sans numéros ou
                autres marques au début.
              </li>
              <li>
                <span className='font-bold block'>
                  Colonnes Réponse A/B/C :
                </span>{" "}
                Saisissez uniquement le texte des options de réponse. N'ajoutez
                aucune étiquette ou indicatif au début.
              </li>
              <li>
                <span className='font-bold block'>Colonne Bonne Réponse :</span>{" "}
                Indiquez la bonne réponse en majuscule (A, B, ou C).
              </li>
            </ul>
          </div>
          <div className='collapse collapse-arrow join-item border border-base-300'>
            <input type='checkbox' />
            <div className='collapse-title text-xl font-medium'>
              Est-ce que je peux voir un exemple de fichier Excel rempli ?
            </div>
            <div className='collapse-content text-zinc-600'>
              <p className='mb-4'>
                Voici un exemple de comment les colonnes pourraient être
                remplies :
              </p>
              <ul className='flex flex-col gap-3 mb-4 rounded-none'>
                <li className='border-b'>
                  <span className='font-bold block'>question:</span> Quel Etat
                  n'a pas adhéré à l'Union européen en 2004 ?
                </li>
                <li className='border-b'>
                  <span className='font-bold'>reponseA :</span> Estonie
                </li>
                <li className='border-b'>
                  <span className='font-bold'>reponseB :</span> Roumanie
                </li>
                <li className='border-b'>
                  <span className='font-bold'>reponseC :</span> Pologne
                </li>
                <li className='border-b'>
                  <span className='font-bold'>bonneReponse (A, B ou C):</span> B
                </li>
              </ul>
              <a href='/qcm.jpeg' target='_blank' rel='noopener noreferrer'>
                <Image
                  src={screenshot}
                  alt='Exemple de fichier Excel rempli'
                  className='mb-3'
                  width={600}
                  height={400}
                />
              </a>
            </div>
          </div>
          <div className='collapse collapse-arrow join-item border border-base-300'>
            <input type='checkbox' />
            <div className='collapse-title text-xl font-medium'>
              Mes données sont-elles stockées sur le site ?
            </div>
            <div className='collapse-content text-zinc-600'>
              <p>
                Non, vos données sont traitées en temps réel et ne sont pas
                stockées sur le serveur. Toutes les opérations sont éphémères et
                supprimées immédiatement après le traitement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
