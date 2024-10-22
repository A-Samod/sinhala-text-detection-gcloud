# Sinhala Text Detection with Google Cloud Vision

This project uses the Google Cloud Vision API to detect text from Base64 encoded images. It is a Node.js application that demonstrates how to use the Vision API to perform Optical Character Recognition (OCR) on images. The detected text is logged in the console and can be further processed based on custom logic.

## Features
- Detects text from images using Google Cloud Vision API.
- Supports Base64 encoded images.
- Logs the detected text for further processing.

## Tech Stack
- **Node.js**: Runtime environment.
- **Google Cloud Vision API**: For text detection.
- **fs**: For file system operations.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/sinhala-text-detection-gcloud.git
    ```

2. Navigate to the project directory:
    ```bash
    cd sinhala-text-detection-gcloud
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a Google Cloud Project and enable the Vision API:
    - Follow [Google's Vision API Documentation](https://cloud.google.com/vision/docs) to set up your project.
    - Download your `keyfile.json` and place it in the project directory.

5. Update `keyFilename` with your Google Cloud Vision API key:
    ```javascript
    const client = new vision.ImageAnnotatorClient({
      keyFilename: 'your-keyfile.json',
    });
    ```

6. Convert an image to Base64 encoding and detect text:
    ```bash
    node index.js
    ```

## Example Usage

Place your image in the `sample_images` folder and run the application to detect text:
```bash
node index.js
```

![image](https://github.com/user-attachments/assets/893ea388-91e0-43a7-885b-170593ac2d4a)
