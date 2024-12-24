import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropZone = ({ storeFileToUpload, displayImg }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', 
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const fileWithPreview = {
          ...file,
          preview: URL.createObjectURL(file),
        };
        setUploadedFile(fileWithPreview);
        storeFileToUpload(fileWithPreview); // Store the single file immediately if needed
      }
    },
  });

  const handleDragOver = (e) => {
    e.preventDefault(); // Ensure the dropzone works
    e.currentTarget.classList.add('bg-blue-200', 'scale-[1.02]', 'border-4');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('bg-blue-200', 'scale-[1.02]', 'border-4');
  };

  // Cleanup object URL when component unmounts
  useEffect(() => {
    return () => {
      if (uploadedFile) {
        URL.revokeObjectURL(uploadedFile.preview);
      }
    };
  }, [uploadedFile]);

  const hasUploadedFile = Boolean(uploadedFile);
  const hasDisplayImg = Boolean(displayImg);

  return (
    <div
      {...getRootProps({
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDragLeave
      })}
      className={`aspect-video min-h-[10rem] flex items-center justify-center bg-blue-50 border-blue-300 border-2 rounded-lg transition-all duration-200 overflow-hidden ${!hasUploadedFile && !hasDisplayImg ? "p-4" : ""}`}
    >
      <input {...getInputProps()} />
      {!hasUploadedFile && !hasDisplayImg && <p>Drag and drop a file here or click to browse.</p>}
      <ul className="flex flex-wrap gap-2">
        {hasUploadedFile && (
          <li key={uploadedFile.name} className="relative">
            <img src={uploadedFile.preview} alt={uploadedFile.name} className="w-full aspect-square object-cover rounded" />
          </li>
        )}
        {hasUploadedFile ? "" : hasDisplayImg && (
          <li className="relative w-full items-center flex">
            <img src={displayImg} alt="preview" className="w-full aspect-video object-cover rounded " />
          </li>
        )}
      </ul>
    </div>
  );
};

export default ImageDropZone;
