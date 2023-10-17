"use client";

import { useState } from "react";
import FileUpload from "./FileUpload";
import ConvertButton from "./ConvertButton";
import DownloadLink from "./DownloadLink";

const ConverterDisplay = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  return (
    <div
      className='grid grid-rows-3 gap-3 text-center'
      style={{ gridTemplateRows: "1fr 1fr 1fr" }}
    >
      <div className='w-fit mx-auto'>
        <FileUpload
          file={file}
          setFile={setFile}
          setConvertedFile={setConvertedFile}
          setErrorMessage={setErrorMessage}
        />
      </div>
      <div className='w-fit mx-auto'>
        <ConvertButton
          file={file}
          setConvertedFile={setConvertedFile}
          setIsLoading={setIsLoading}
          setErrorMessage={setErrorMessage}
        />
      </div>
      <div className='w-fit mx-auto'>
        {isLoading ? (
          <span className='loading loading-dots loading-lg'></span>
        ) : errorMessage ? (
          <div className='text-red-500 w-96 mx-auto'>{errorMessage}</div>
        ) : convertedFile ? (
          <DownloadLink convertedFile={convertedFile} />
        ) : (
          <div className='placeholder'></div>
        )}
      </div>
    </div>
  );
};

export default ConverterDisplay;
