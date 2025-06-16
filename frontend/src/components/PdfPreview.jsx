import { FiFile, FiX, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const PdfPreview = ({ files, onRemove, onMoveUp, onMoveDown }) => {
  return (
    <div className="preview-container">
      <h3>Selected Files ({files.length})</h3>
      <ul className="preview-list">
        {files.map((file, index) => (
          <li key={file.name + index} className="preview-item">
            <FiFile className="file-icon" />
            <span className="file-name">{file.name}</span>
            <div className="file-actions">
              <button 
                onClick={() => onMoveUp(index)} 
                disabled={index === 0}
                title="Move up"
              >
                <FiArrowUp />
              </button>
              <button 
                onClick={() => onMoveDown(index)} 
                disabled={index === files.length - 1}
                title="Move down"
              >
                <FiArrowDown />
              </button>
              <button onClick={() => onRemove(index)} title="Remove">
                <FiX />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfPreview;