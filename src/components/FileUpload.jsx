const FileUpload = ({ setFile }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <div className='form-control w-full max-w-xs'>
      <label className='label'>
        <span className='label-text'>Sélectionnez un fichier</span>
        <span className='label-text-alt'></span>
      </label>
      <input
        type='file'
        className='file-input file-input-bordered w-full max-w-xs normal-case'
        id='file-upload'
        accept='.xlsx'
        onChange={handleFileChange}
      />
      <label className='label'>
        <span className='label-text-alt'></span>
        <span className='label-text-alt'></span>
      </label>
    </div>
  );
};

export default FileUpload;
