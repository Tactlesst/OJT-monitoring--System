import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function QRLogin() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });

    scanner.render((decodedText) => {
      // Assuming the QR code contains a JSON string with the image URL
      try {
        const parsedData = JSON.parse(decodedText);
        if (parsedData.image) {
          setImageUrl(parsedData.image);  // Set the image URL from the QR data
        } else {
          alert("No image URL found in the QR code.");
        }
      } catch (error) {
        alert("Error parsing QR code data.");
      }
    });

    return () => scanner.clear();
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Scan QR Code</h2>
      <div id="qr-reader" className="w-64 h-64 mb-4"></div>

      {/* Display the scanned image if the URL is available */}
      {imageUrl && (
        <div className="mt-4">
          <h3 className="text-md font-medium">Scanned Image</h3>
          <img src={imageUrl} alt="Scanned QR Image" className="mt-2 max-w-full h-auto rounded-md shadow-md" />
        </div>
      )}
    </div>
  );
}
