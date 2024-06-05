import React, { useState } from 'react';
import axios from 'axios';

const ImageConverter = () => {
  const [file, setFile] = useState(null);
  const [conversionType, setConversionType] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setDownloadUrl(''); // Reset download URL
  };

  const handleConversionTypeChange = (e) => {
    setConversionType(e.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('format', conversionType);

    try {
      console.log('Submitting form...');
      const response = await axios.post('http://127.0.0.1:5000/convert/image', formData, {
        responseType: 'blob',
      });

      console.log('Response received:', response);

      const url = window.URL.createObjectURL(new Blob([response.data]));
      console.log('Generated URL:', url);
      setDownloadUrl(url);
    } catch (error) {
      console.error('There was an error converting the image:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <select value={conversionType} onChange={handleConversionTypeChange}>
          <option value="">Select conversion type</option>
          <option value="jpg">JPG</option>
          <option value="png">PNG</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit} disabled={!file || !conversionType}>
          {downloadUrl ? 'Download' : 'Convert Image'}
        </button>
      </div>
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
