const DownloadLink = ({ convertedFile }) => {
  if (convertedFile instanceof Blob) {
    const url = URL.createObjectURL(convertedFile);
    return (
      <a
        href={url}
        download='fichier_converti.xml'
        className='btn btn-link text-lg normal-case'
      >
        Télécharger le fichier converti
      </a>
    );
  }
  return null;
};

export default DownloadLink;
