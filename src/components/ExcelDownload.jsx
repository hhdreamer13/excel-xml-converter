const ExcelDownload = ({ qcmType }) => {
  return (
    <a
      href='/qcm_modele.xlsx'
      target='_blank'
      rel='noopener noreferrer'
      className='group flex relative flex-col h-full justify-center items-center border py-2 px-4 rounded-lg'
    >
      <p className='text-sm label-text'>
        Téléchargez le fichier modèle Excel de{" "}
        <span className='font-semibold px-2 py-1 bg-green-200 rounded-full'>
          {qcmType} choix de réponse
        </span>
      </p>
      <svg
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='w-5 h-5 absolute top-1 right-1 group-hover:scale-110 transition'
      >
        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          {" "}
          <path
            d='M12 7L12 14M12 14L15 11M12 14L9 11'
            stroke='#000000'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>{" "}
          <path
            d='M16 17H12H8'
            stroke='#000000'
            stroke-width='1.5'
            stroke-linecap='round'
          ></path>{" "}
          <path
            opacity='0.5'
            d='M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z'
            stroke='#000000'
            stroke-width='1.5'
          ></path>{" "}
        </g>
      </svg>
    </a>
  );
};

export default ExcelDownload;
