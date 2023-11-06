/* eslint-disable react/no-unescaped-entities */
const ExcelDownload = ({ qcmType, penalty }) => {
  return (
    <a
      href={`/qcm_modele_${qcmType}choix.xlsx`}
      target='_blank'
      rel='noopener noreferrer'
      title='Téléchargez le fichier'
      className='flex relative flex-col h-full justify-center items-center border py-2 px-4 rounded-lg transition-all hover:bg-slate-100 hover:shadow-md'
      onClick={(e) => {
        if (!qcmType) {
          e.preventDefault();
        }
      }}
    >
      {qcmType ? (
        <p className='text-sm label-text text-justify'>
          Cliquez ici pour télécharger le modèle Excel pour un QCM à{" "}
          <span className='font-semibold p-1 text-accent bg-opacity-60 rounded-full'>
            {qcmType}
          </span>{" "}
          choix de réponses,{" "}
          {penalty !== "0" && penalty ? (
            <span>
              avec une pénalité de{" "}
              <span className='font-semibold text-error leading-relaxed'>
                {penalty}
              </span>{" "}
              point pour chaque réponse incorrecte.
            </span>
          ) : (
            " sans pénalité pour les réponses incorrectes."
          )}
        </p>
      ) : (
        <p className='text-sm label-text text-justify'>
          Pour télécharger le modèle Excel, sélectionnez d'abord le type de
          votre QCM.
        </p>
      )}

      <svg
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6 absolute top-0 right-0'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <path
            d='M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333'
            stroke='#464455'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </g>
      </svg>
    </a>
  );
};

export default ExcelDownload;
