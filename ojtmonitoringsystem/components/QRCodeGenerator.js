import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function QRCodeGenerator() {
  const [name, setName] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [qrValue, setQrValue] = useState('');

  // Handle name input change
  const handleNameChange = (e) => setName(e.target.value);

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = `../public/images/${file.name}`; // Generate URL based on file name
      setImagePath(imageUrl); // Save the image path to state

      // Save image to 'public/images' folder (simulated, you'll need a backend for actual upload)
      const reader = new FileReader();
      reader.onloadend = () => {
        // Here, you should upload the file to the server or move the file to the public/images folder
        console.log('Image uploaded to:', imageUrl); // For now, just log the URL
      };
      reader.readAsDataURL(file); // Read the file as a base64 string (for validation, etc.)
    }
  };

  // Generate QR code with name and image URL
  const generateQR = () => {
    if (name && imagePath) {
      const userInfo = {
        name,
        image: imagePath, // Image path stored in public/images/
      };
      setQrValue(JSON.stringify(userInfo)); // Set QR value as a JSON object
    } else {
      alert('Please fill in both your name and upload a picture.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator (Name & Image)</h1>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
        className="p-2 border border-gray-300 rounded w-64 mb-4"
      />

      {/* Image Upload */}
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        className="mb-4"
      />

      <button
        onClick={generateQR}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate QR Code
      </button>

      {/* QR Code Display */}
      {qrValue && (
        <div className="mt-6 bg-white p-4 shadow-md rounded">
          <QRCodeCanvas value={qrValue} size={200} />
        </div>
      )}

      {/* Display image URL if available */}
      {imagePath && (
        <div className="mt-4">
          <p className="text-sm">Image path: {imagePath}</p>
        </div>
      )}
    </div>
  );
}
