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
  const [qcmType, setQcmType] = useState("3");

  const handleDownloadTemplate = () => {
    const fileName =
      qcmType === "3" ? "QCM_3_choices.xlsx" : "QCM_4_choices.xlsx";
    window.location.href = `/public/${fileName}`;
  };

  return (
    <div className='flex flex-col gap-3 text-center border'>
      <div className='w-fit mx-auto flex flex-col justify-center items-center border py-2 px-4 rounded-lg'>
        <p className='label flex gap-2'>Type de QCM :</p>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>3 choix de réponses</span>
            <input
              type='radio'
              name='qcmType'
              value='3'
              checked={qcmType === "3"}
              onChange={() => setQcmType("3")}
              className='radio ml-2'
            />
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>4 choix de réponses</span>
            <input
              type='radio'
              name='qcmType'
              value='4'
              checked={qcmType === "4"}
              onChange={() => setQcmType("4")}
              className='radio ml-2'
            />
          </label>
        </div>
      </div>

      <div className='w-fit mx-auto border'>
        <FileUpload
          file={file}
          setFile={setFile}
          setConvertedFile={setConvertedFile}
          setErrorMessage={setErrorMessage}
        />
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
