const DownloadLink = ({ convertedFile, qcmType }) => {
  if (convertedFile instanceof Blob) {
    const url = URL.createObjectURL(convertedFile);
    return (
      <a
        href={url}
        download='fichier_converti.xml'
        className='btn btn-link text-sky-500 hover:text-sky-600 text-lg normal-case'
      >
        Télécharger le fichier QCM à {qcmType} choix converti
      </a>
    );
  }
  return null;
};

export default DownloadLink;
