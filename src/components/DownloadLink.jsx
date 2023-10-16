const DownloadLink = ({ convertedFile }) => {
  if (convertedFile instanceof Blob) {
    const url = URL.createObjectURL(convertedFile);
    return (
      <a
        href={url}
        download='converted.xml'
        className='link link-info normal-case'
      >
        Télécharger le fichier converti
      </a>
    );
  }
  return null;
};

export default DownloadLink;
