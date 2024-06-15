import React, { useState } from 'react';
import axios from 'axios';

const ImageConverter = () => {
  const [file, setFile] = useState(null);
  const [conversionType, setConversionType] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setDownloadUrl('');
  };

  const handleConversionTypeChange = (e) => {
    setConversionType(e.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('format', conversionType);

    try {
      const response = await axios.post('http://127.0.0.1:5000/convert/image', formData, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
    } catch (error) {
      console.error('There was an error converting the image:', error);
    }
  };

  return (
    <div>
      <input type="file" accept=".png, .jpg, .jpeg" onChange={handleFileChange} />
      <select value={conversionType} onChange={handleConversionTypeChange}>
        <option value="">Select conversion type</option>
        <option value="jpg">JPG</option>
        <option value="png">PNG</option>
      </select>
      <button onClick={handleSubmit} disabled={!file || !conversionType}>
        Convert Image
      </button>
      {downloadUrl && (
        <div>
          <a href={downloadUrl} download={`converted.${conversionType}`}>
            <button>Download Converted Image</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageConverter;
