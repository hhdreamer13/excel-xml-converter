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
      <div className='w-full'>
        <FileUpload
          file={file}
          setFile={setFile}
          setConvertedFile={setConvertedFile}
        />
      </div>
      <div className='w-full'>
        <ConvertButton
          file={file}
          setConvertedFile={setConvertedFile}
          setIsLoading={setIsLoading}
          setErrorMessage={setErrorMessage}
        />
      </div>
      <div className='w-full'>
        {isLoading ? (
          <span className='loading loading-dots loading-lg'></span>
        ) : errorMessage ? (
          <div className='text-red-500'>{errorMessage}</div>
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
