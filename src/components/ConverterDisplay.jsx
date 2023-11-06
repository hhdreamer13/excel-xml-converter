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
  const [qcmType, setQcmType] = useState(null);
  const [penalty, setPenalty] = useState(0);

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-5'>
        <div className=''>
          <p className='font-semibold'>
            <span className='font-mono'>1.</span> Type de QCM :
          </p>
          <div className='w-60 h-40'>
            <TypeQcmRadio
              qcmType={qcmType}
              setQcmType={setQcmType}
              penalty={penalty}
              setPenalty={setPenalty}
            />
          </div>
        </div>
        <div className=''>
          <p className='font-semibold'>
            <span className='font-mono'>2.</span> Modèle Excel :
          </p>
          <div className='w-60 h-40 '>
            <ExcelDownload qcmType={qcmType} penalty={penalty} />
          </div>
        </div>
        <div className=''>
          <p className='font-semibold'>
            <span className='font-mono'>3.</span> Remplir le fichier :
          </p>
          <div className='w-60 h-40'>
            <div className='flex flex-col h-full justify-center text-justify items-center border py-2 px-4 rounded-lg'>
              <p className='text-sm label-text'>
                Remplissez le fichier Excel avec vos questions, les options de
                réponses et indiquez la bonne réponse, tout en respectant les
                consignes.
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
          qcmType={qcmType}
          setConvertedFile={setConvertedFile}
          setIsLoading={setIsLoading}
          setErrorMessage={setErrorMessage}
          penalty={penalty}
        />
      </div>
      <div className='w-fit mx-auto'>
        {isLoading ? (
          <span className='loading loading-dots loading-lg'></span>
        ) : errorMessage ? (
          <div className='text-red-500 w-full mx-auto'>{errorMessage}</div>
        ) : convertedFile ? (
          <DownloadLink convertedFile={convertedFile} qcmType={qcmType} />
        ) : (
          <div className='placeholder'></div>
        )}
      </div>
    </div>
  );
};

export default ConverterDisplay;
