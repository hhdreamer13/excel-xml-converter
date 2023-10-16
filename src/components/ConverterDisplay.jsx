"use client";

import { useState } from "react";
import FileUpload from "./FileUpload";
import ConvertButton from "./ConvertButton";
import DownloadLink from "./DownloadLink";

const ConverterDisplay = () => {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  return (
    <div
      className='grid grid-rows-3 gap-3 text-center'
      style={{ gridTemplateRows: "1fr 1fr 1fr" }}
    >
      <div className='w-full'>
        <FileUpload setFile={setFile} />
      </div>
      <div className='w-full'>
        <ConvertButton file={file} setConvertedFile={setConvertedFile} />
      </div>
      <div className='w-full'>
        {convertedFile ? (
          <DownloadLink convertedFile={convertedFile} />
        ) : (
          <div className='placeholder'></div>
        )}
      </div>
    </div>
  );
};

export default ConverterDisplay;
