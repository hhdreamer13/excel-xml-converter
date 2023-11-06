import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const Faq = () => {
  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-xl m-4'>Foire Aux Questions</h2>
      <div className='join join-vertical w-full'>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Quelle est la fonction de ce site ?
          </div>
          <div className='collapse-content opacity-60'>
            <p>
              Cette application web permet de convertir vos fichiers Excel,
              contenant des questions à choix multiples (QCM), en fichiers XML.
              Ces fichiers XML sont ensuite compatibles avec la plateforme
              Moodle, facilitant ainsi leur intégration sur Agorassas
            </p>
          </div>
        </div>

        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Quelles sont les étapes pour utiliser ce site ?
          </div>
          <div className='collapse-content opacity-60'>
            <ol className='list-decimal	ml-4 flex flex-col gap-3'>
              <li>
                <span className='font-bold block'>
                  Choisissez le type de QCM :
                </span>{" "}
                Sélectionnez si votre QCM aura 3 ou 4 choix de réponses. Vous
                pouvez également définir une pénalité pour chaque mauvaise
                réponse, de 0 à 1 point, ajustable par incréments de 0.5.
              </li>
              <li>
                <span className='font-bold block'>
                  Téléchargez le modèle Excel :
                </span>{" "}
                Téléchargez le modèle Excel correspondant à votre type de QCM.
                Si vous choisissez un QCM avec pénalité, le modèle intégrera
                cette information.
              </li>
              <li>
                <span className='font-bold block'>
                  Remplissez le fichier Excel :
                </span>{" "}
                Entrez vos questions, les options de réponses, et indiquez la
                bonne réponse dans le modèle téléchargé, en suivant les
                instructions.
              </li>
              <li>
                <span className='font-bold block'>
                  Déposez le fichier Excel rempli :
                </span>{" "}
                Glissez et déposez le fichier Excel complété sur le site web
                pour initier la conversion.
              </li>
              <li>
                <span className='font-bold block'>
                  Convertissez le fichier :
                </span>{" "}
                Cliquez sur le bouton "Convertir le fichier" et attendez que le
                processus de conversion soit terminé.
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
          <div className='collapse-content opacity-60'>
            <p>
              Si vous avez déjà un QCM dans un format autre qu'Excel, il
              faudrait copier-coller les questions et les réponses dans le
              modèle Excel .
            </p>
          </div>
        </div>
        {/* <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Y a-t-il des limitations à connaître ?
          </div>
          <div className='collapse-content opacity-60'>
            <p>
              Pour le moment, ce service ne convertit que des QCM avec
              exactement{" "}
              <span className='underline font-semibold'>trois choix</span> de
              réponse (A, B, et C). Si votre question a moins de trois choix, le
              troisième choix apparaîtra vide lors du test.
            </p>
          </div>
        </div> */}
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Y a-t-il des consignes spéciales pour remplir le modèle Excel ?
          </div>
          <div className='collapse-content opacity-60'>
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
        </div>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Est-ce que je peux voir un exemple de fichier Excel rempli ?
          </div>
          <div className='collapse-content'>
            <p className='mb-4 opacity-60'>
              Voici un exemple de comment les colonnes pourraient être remplies
              :
            </p>
            <ul className='flex flex-col gap-3 mb-4 opacity-60'>
              <li className='border-b'>
                <span className='font-bold'>question:</span> Quel Etat n'a pas
                adhéré à l'Union européen en 2004 ?
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
                <span className='font-bold'>bonneReponse (A, B ou C) :</span> B
              </li>
            </ul>
            <a
              href='/qcm.png'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-100'
            >
              <Image
                src='/qcm.png'
                alt='Exemple de fichier Excel rempli'
                className='mb-3 dark:opacity-60 opacity-75 hover:opacity-100 duration-300 transition-opacity'
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
          <div className='collapse-content opacity-60'>
            <p>
              Non, vos données sont traitées en temps réel et ne sont pas
              stockées sur le serveur. Toutes les opérations sont éphémères et
              supprimées immédiatement après le traitement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
