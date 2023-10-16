const ConvertButton = ({ file, setConvertedFile }) => {
  const handleConvert = async () => {
    const formData = new FormData();
    formData.append("excel_file", file);

    const response = await fetch("/api/convert", {
      method: "POST",
      body: formData,
    });

    const blob = await response.blob();
    setConvertedFile(blob);
  };

  return (
    <button
      className='btn normal-case'
      onClick={handleConvert}
      disabled={!file}
    >
      Convertir le fichier
    </button>
  );
};

export default ConvertButton;
