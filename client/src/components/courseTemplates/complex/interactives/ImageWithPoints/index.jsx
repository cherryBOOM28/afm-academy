import React, { useRef, useEffect } from 'react';

function ImageWithPoints({ image, points }) {
    // Create a ref to attach to the canvas element
    const canvasRef = useRef(null);

    useEffect(() => {
        // Ensure the image prop is provided and is an instance of Image
        if (image && image instanceof Image) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            // When the image has loaded, draw it on the canvas
            image.onload = () => {
                // Set canvas dimensions to match the image
                canvas.width = image.width;
                canvas.height = image.height;

                // Draw the image
                context.drawImage(image, 0, 0);
                
                // If points are provided, draw them on the image
                if (points && points.length) {
                    points.forEach(point => {
                        // Implement the drawing logic for each point
                        // For example, draw a small circle at each point
                        context.beginPath();
                        context.arc(point.x, point.y, 5, 0, Math.PI * 2, true);
                        context.fill();
                    });
                }
            };

            // If the image is already loaded (e.g., cached), draw it immediately
            if (image.complete) {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
            }
        }
    }, [image, points]); // Re-run effect if image or points prop changes

    return (
        <div className="image-with-points">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default ImageWithPoints;
