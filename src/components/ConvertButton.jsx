const ConvertButton = ({
  file,
  qcmType,
  setConvertedFile,
  setIsLoading,
  setErrorMessage,
  penalty,
}) => {
  const handleConvert = async () => {
    setIsLoading(true);
    setErrorMessage(null); // Clear any existing error messages

    const formData = new FormData();
    formData.append("excel_file", file);
    formData.append("qcm_type", qcmType);
    formData.append("penalty", penalty);

    const response = await fetch("/api/convert", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const blob = await response.blob();
      setConvertedFile(blob);
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.error || "An unknown error occurred");
    }

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
