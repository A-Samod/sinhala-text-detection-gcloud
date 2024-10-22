const vision = require('@google-cloud/vision');
const fs = require('fs');

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'dotted-tide-439215-r7-53f54f871e8c.json',
});

// Function to detect text from Base64 encoded image
async function detectTextBase64(base64Image) {
  try {
    const request = {
      image: {
        content: base64Image,
      },
      features: [{ type: 'DOCUMENT_TEXT_DETECTION' }]
    };

    // Performs text detection
    const [result] = await client.annotateImage(request);
    const detections = result.textAnnotations;

    console.log("============================")
    console.log(detections);
    console.log("============================")

if (detections && detections.length > 0) {
  // const foundWord = detections[0].description;
  // const obj = { සරම: foundWord };
  // if (obj["සරම"] === "සරම") {
  //   console.log('Text Detected:',detections[0].description);
  // } 
  console.log('Text Detected:',detections[0].description);
} else {
  console.log("No text detected");
}

  //  detections.forEach(text => console.log(text.description));
  } catch (error) {
    console.error('Error detecting text:', error);
  }
}

// Convert an image file to Base64
const imageFilePath = 'sample_images/sa5.jpeg'; //sa5.jpeg, amara2, 
const base64Image = fs.readFileSync(imageFilePath).toString('base64');

// Detect text in the Base64-encoded image
detectTextBase64(base64Image);
