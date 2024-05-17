/**
 * Determines whether to use black or white text based on the luminance of a background image.
 * @param {HTMLElement} element - The element with the background image to analyze.
 * @param {function} callback - A callback function to receive the computed text color ("black" or "white").
 */
export const getTextColorForDynamicBackground = (element, callback) => {
  // Extract the current background image URL from the element
  const backgroundImage = window.getComputedStyle(element).backgroundImage;
  const imageUrlMatch = backgroundImage.match(/url\(["']?(.*?)["']?\)/);

  if (imageUrlMatch && imageUrlMatch[1]) {
    const imageUrl = imageUrlMatch[1];
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Ensure image is accessible if hosted externally

    img.onload = () => {
      // Create a canvas to draw the background image
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Get the pixel data of the entire image
      const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
      let totalLuminance = 0;

      // Calculate the luminance of each pixel
      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];

        // Calculate luminance (using Rec. 709 formula)
        const luminance = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
        totalLuminance += luminance;
      }

      // Calculate the average luminance
      const avgLuminance = totalLuminance / (imageData.length / 4);

      // Determine the text color based on luminance (adjust threshold as necessary)
      const textColor = avgLuminance > 0.5 ? "black" : "white";
      callback(textColor);
    };

    img.onerror = () => {
      console.error("Error loading background image for analysis.");
      callback("black");
    };

    // Load the image from the extracted URL
    img.src = imageUrl;
  } else {
    console.warn("No background image found on the element.");
    callback("black");
  }
};
