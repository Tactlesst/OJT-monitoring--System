import { useState } from 'react';
import { useRouter } from 'next/router';
import { QRCodeCanvas } from 'qrcode.react';
import QRLogin from '../components/QRLogin';

export default function Login() {
  const [qrToken] = useState('demo_qr_code_123'); // Static QR Code for now
  const router = useRouter(); // Next.js router

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login with QR Code</h1>
      
      <div className="bg-white p-4 shadow-md rounded-md">
        <QRCodeCanvas value={qrToken} size={200} />
      </div>

      <p className="mt-4 text-gray-500">Scan the QR code to log in</p>

      <div className="mt-6">
        <QRLogin />
      </div>

      {/* Go Back Button */}
      <button 
        onClick={() => router.push('/')} 
        className="mt-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Go Back
      </button>
    </div>
  );
}
