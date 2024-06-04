# Everything Convert and Download

**Everything Convert and Download** is a versatile web application that allows users to convert various file types and download content from multiple online platforms. This project aims to provide a comprehensive solution for all your file conversion and downloading needs with a user-friendly interface.

## Features

### Image Conversion
- Convert HEIC to JPG
- Convert PNG to JPG
- Convert BMP to PNG
- Convert GIF to PNG

### Video Conversion and Download
- Download YouTube videos (MP4)
- Convert YouTube videos to MP3
- Convert MP4 to AVI
- Convert MKV to MP4
- Download TikToks to MP4 or MP3

### Audio Conversion
- Convert MP3 to WAV
- Convert WAV to MP3
- Convert FLAC to MP3
- Download songs from SoundCloud

### Document Conversion
- Convert PDF to DOCX
- Convert DOCX to PDF
- Convert TXT to PDF

### Social Media Download
- Download Instagram posts (images/videos)
- Download Instagram stories
- Download Instagram reels

## Tech Stack

### Backend
- **Python**: Core programming language
- **Flask**: Web framework for building the API
- **Libraries**: 
  - Pillow (image conversion)
  - moviepy (video conversion)
  - pytube (YouTube downloads)
  - ffmpeg (audio conversion)
  - pdf2docx (document conversion)
  - instaloader (Instagram downloads)
  - tiktok-downloader (TikTok downloads)

### Frontend
- **React**: JavaScript library for building user interfaces
- **Axios**: For making HTTP requests to the backend

## Setup Instructions

### Prerequisites
- Python 3.x
- Node.js
- npm (Node Package Manager)
- Git

### Clone the Repository
```bash
git clone https://github.com/yourusername/everything-convert-download.git
cd everything-convert-download
```

### Backend Setup
1. Navigate to the backend directory
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it
   ```bash
   python3 -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```
3. Install the required packages
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask server
   ```bash
   flask --app main run
   ```

### Frontend Setup
1. Navigate to the frontend directory
   ```bash
   cd ../frontend
   ```
2. Install the required packages
   ```bash
   npm install
   ```
3. Start the React development server
   ```bash
   npm start
   ```

## Usage
1. Open your web browser and navigate to `http://localhost:3000`
2. Use the interface to upload files for conversion or provide URLs for downloading content
3. Follow the prompts to download the converted files or media

## Contributing
Contributions are welcome! Please fork the repository and submit pull requests for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to customize this description further to match your project's specifics and preferences.
