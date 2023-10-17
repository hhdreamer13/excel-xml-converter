const ConvertButton = ({ file, setConvertedFile, setIsLoading }) => {
  const handleConvert = async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("excel_file", file);

    const response = await fetch("/api/convert", {
      method: "POST",
      body: formData,
    });

    const blob = await response.blob();
    setConvertedFile(blob);
    setIsLoading(false);
  };

  return (
    <button
      className='btn border border-gray-300 hover:border-gray-400 normal-case'
      onClick={handleConvert}
      disabled={!file}
    >
      Convertir le fichier
    </button>
  );
};

export default ConvertButton;
