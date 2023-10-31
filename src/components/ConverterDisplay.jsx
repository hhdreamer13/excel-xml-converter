"use client";

import { useState } from "react";
import FileUpload from "./FileUpload";
import ConvertButton from "./ConvertButton";
import DownloadLink from "./DownloadLink";
import TypeQcmRadio from "./TypeQcmRadio";
import ExcelDownload from "./ExcelDownload";

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
    <div className='flex flex-col gap-3'>
      <div className='flex gap-5'>
        <div className=''>
          <p className='font-semibold'>
            <span className='font-mono'>1.</span> Type de QCM :
          </p>
          <div className='w-60 h-28'>
            <TypeQcmRadio qcmType={qcmType} setQcmType={setQcmType} />
          </div>
        </div>
        <div className=''>
          <p className='font-semibold'>
            <span className='font-mono'>2.</span> Modèle Excel :
          </p>
          <div className='w-60 h-28 '>
            <ExcelDownload qcmType={qcmType} />
          </div>
        </div>
        <div className=''>
          <p className='font-semibold'>
            <span className='font-mono'>3.</span> Remplir le fichier :
          </p>
          <div className='w-60 h-28'>
            <div className='flex flex-col h-full justify-center items-center border py-2 px-4 rounded-lg'>
              <p className='text-sm label-text'>
                Remplissez le fichier Excel avec vos questions, veuillez
                respecter les consignes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto mt-5'>
        <p className='font-semibold text-center'>
          <span className='font-mono'>4.</span> Déposez le fichier Excel
          remplie.
        </p>
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
