from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from PIL import Image
import os

app = Flask(__name__)
CORS(app)  # This should already be there

@app.route('/')
def home():
    return jsonify(message="Welcome to Everything Convert and Download API")

@app.route('/test', methods=['GET'])
def test():
    return jsonify(message="Test endpoint is working")

@app.route('/convert/image', methods=['POST'])
def convert_image():
    try:
        file = request.files['file']
        target_format = request.form.get('format', 'jpg').lower()
        if target_format == 'jpg':
            target_format = 'jpeg'
        img = Image.open(file.stream)
        img = img.convert("RGB")
        output_path = f"converted.{target_format}"
        img.save(output_path, target_format.upper())
        return send_file(output_path, mimetype=f'image/{target_format}', as_attachment=True, download_name=f'converted.{target_format}')
    except Exception as e:
        app.logger.error(f"Error converting image: {e}")
        return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run(debug=True)
