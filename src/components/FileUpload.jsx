const FileUpload = ({ file, setFile, setConvertedFile, setErrorMessage }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileExtension = file.name.split(".").pop();
      if (fileExtension === "xlsx") {
        setFile(file);
      } else {
        setErrorMessage("Veuillez télécharger un fichier Excel valide (.xlsx)");
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
        <span className='label-text'>Sélectionnez un fichier Excel</span>
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
          className='badge badge-outline text-xs gap-2 absolute top-0 right-0'
          onClick={clearFile}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-4 h-4 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
          Effacer
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
