import { useState } from 'react';
import PdfUploader from './PdfUploader';
import PdfPreview from './PdfPreview';
import PdfDownload from './PdfDownload';
import { mergePdfs } from '../utils/pdfUtils';

const PdfMerger = () => {
  const [files, setFiles] = useState([]);
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const [mergedPdf, setMergedPdf] = useState(null);

  // Define all handler functions first
  const handleFilesAdded = (newFiles) => {
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    setError(null);
    setMergedPdf(null); // Clear previous merge when new files are added
  };

  const handleRemoveFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    setMergedPdf(null); // Clear previous merge when files are changed
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const newFiles = [...files];
      [newFiles[index - 1], newFiles[index]] = [newFiles[index], newFiles[index - 1]];
      setFiles(newFiles);
      setMergedPdf(null); // Clear previous merge when order changes
    }
  };

  const handleMoveDown = (index) => {
    if (index < files.length - 1) {
      const newFiles = [...files];
      [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
      setFiles(newFiles);
      setMergedPdf(null); // Clear previous merge when order changes
    }
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError('Please add at least 2 PDF files to merge');
      return;
    }

    setIsMerging(true);
    setError(null);

    try {
      const mergedPdfBytes = await mergePdfs(files);
      setMergedPdf(mergedPdfBytes);
    } catch (err) {
      setError('Failed to merge PDFs: ' + err.message);
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <div className="pdf-merger flex flex-col items-center">
      <h2>PDF Merger and Arranger</h2>
      
      <PdfUploader onFilesAdded={handleFilesAdded} />
      
      {files.length > 0 && (
        <>
          <PdfPreview 
            files={files} 
            onRemove={handleRemoveFile}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
          />
          
          <div className="actions">
            <button 
              onClick={handleMerge} 
              disabled={isMerging || files.length < 2}
            >
              {isMerging ? 'Merging...' : 'Merge PDFs'}
            </button>
          </div>
        </>
      )}
      
      {mergedPdf && <PdfDownload mergedPdf={mergedPdf} />}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default PdfMerger;