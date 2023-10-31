const FileUpload = ({ file, setFile, setConvertedFile, setErrorMessage }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileExtension = file.name.split(".").pop();
      if (fileExtension === "xlsx") {
        setFile(file);
      } else {
        setErrorMessage(
          "Veuillez séléctionner un fichier Excel valide (.xlsx)"
        );
        clearFile();
      }
    }
  };

  const clearFile = () => {
    document.getElementById("file-upload").value = null;
    setFile(null);
    setConvertedFile(null);
    setErrorMessage(null);
  };

  return (
    <div className='relative form-control w-full max-w-xs'>
      <label className='label'>
        {/* <span className='label-text'>Séléctionnez votre fichier</span> */}
        <span className='label-text-alt'></span>
      </label>
      <input
        type='file'
        className='file-input file-input-bordered w-full max-w-xs normal-case'
        id='file-upload'
        accept='.xlsx'
        onChange={handleFileChange}
      />
      {file ? (
        <button
          className='text-xs gap-2 absolute -top-1 -right-6'
          onClick={clearFile}
          title='Enlever le ficher'
        >
          <svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 hover:scale-110'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              {" "}
              <path
                opacity='0.5'
                d='M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z'
                stroke='#1f2937'
                strokeWidth='1.5'
              ></path>{" "}
              <path
                d='M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5'
                stroke='#1f2937'
                strokeWidth='1.5'
                strokeLinecap='round'
              ></path>{" "}
            </g>
          </svg>
        </button>
      ) : null}

      <label className='label'>
        <span className='label-text-alt'></span>
        <span className='label-text-alt'></span>
      </label>
    </div>
  );
};

export default FileUpload;
