import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

const PdfUploader = ({ onFilesAdded }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onFilesAdded(acceptedFiles);
    },
    [onFilesAdded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
    multiple: true,
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the PDF files here...</p>
      ) : (
        <div className="upload-prompt">
          <FiUpload size={48} />
          <p>Drag & drop PDF files here, or click to select files</p>
        </div>
      )}
    </div>
  );
};

export default PdfUploader;
