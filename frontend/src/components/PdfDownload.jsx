import { useEffect, useState } from 'react';
import { FiDownload } from 'react-icons/fi';

const PdfDownload = ({ mergedPdf, fileName = 'merged.pdf' }) => {
  const [downloadUrl, setDownloadUrl] = useState(null);

  useEffect(() => {
    // Create download URL when mergedPdf changes
    if (mergedPdf) {
      const blob = new Blob([mergedPdf], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);

      // Clean up function
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [mergedPdf]);

  if (!downloadUrl) return null;

  return (
    <div className="download-container">
      <a
        href={downloadUrl}
        download={fileName}
        className="download-button"
      >
        <FiDownload size={18} />
        Download Merged PDF
      </a>
      <p className="download-hint">Click to download your merged PDF file</p>
    </div>
  );
};

export default PdfDownload;