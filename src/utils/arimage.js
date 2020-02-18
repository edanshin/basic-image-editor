function truncateColor(value) {
    if (value < 0) {
        value = 0;
    } else if (value > 255) {
        value = 255;
    }

    return value;
}

export default class ARimage {
    static LoadToCanvas(canvas, image, context) {
        // set canvas height to renderable height of the image
        var height = image.height * (canvas.width / image.width);
        canvas.height = height;

        var imageAspectRatio = image.width / image.height;
        var canvasAspectRatio = canvas.width / canvas.height;
        var renderableHeight, renderableWidth, xStart, yStart;
  
        // If image's aspect ratio is less than canvas's we fit on height
        // and place the image centrally along width
        if (imageAspectRatio < canvasAspectRatio) {
          renderableHeight = canvas.height;
          renderableWidth = image.width * (renderableHeight / image.height);
          xStart = (canvas.width - renderableWidth) / 2;
          yStart = 0;
        }

        // If image's aspect ratio is greater than canvas's we fit on width
        // and place the image centrally along height
        else if (imageAspectRatio > canvasAspectRatio) {
          renderableWidth = canvas.width
          renderableHeight = image.height * (renderableWidth / image.width);
          xStart = 0;
          yStart = (canvas.height - renderableHeight) / 2;
        }
  
        // keep aspect ratio
        else {
          renderableHeight = canvas.height;
          renderableWidth = canvas.width;
          xStart = 0;
          yStart = 0;
        }
  
        context.drawImage(image, xStart, yStart, renderableWidth, renderableHeight);
    }

    static ModifyBrightness(imageData, brightnessLevel) {
        for (var i = 0; i < imageData.length; i+= 4) {
            imageData[i] += 255 * (brightnessLevel / 100);
            imageData[i+1] += 255 * (brightnessLevel / 100);
            imageData[i+2] += 255 * (brightnessLevel / 100);
        }
    }

    static ModifyContrast(imageData, contrastLevel) {
        var factor = (259.0 * (contrastLevel + 255.0)) / (255.0 * (259.0 - contrastLevel));
  
        for (var i = 0; i < imageData.length; i+= 4) {
            imageData[i] = truncateColor(factor * (imageData[i] - 128.0) + 128.0);
            imageData[i+1] = truncateColor(factor * (imageData[i+1] - 128.0) + 128.0);
            imageData[i+2] = truncateColor(factor * (imageData[i+2] - 128.0) + 128.0);
        }
    }
}
