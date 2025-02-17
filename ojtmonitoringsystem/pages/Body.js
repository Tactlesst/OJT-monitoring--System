import { useState, useEffect } from 'react';
import Header from './Header';
import HeroBanner from './HeroBanner';
import Footer from './Footer';
import Link from 'next/link';
import QRCodeGenerator from '../components/QRCodeGenerator';
import BackToTop from '../components/BackToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('Loading...'); // Initial message

  useEffect(() => {
    // Simulate loading (replace with your actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Change loading message periodically (optional)
    const messages = [
      'Loading...',
      'Fetching data...',
      'Almost there...',
      'Preparing your content...',
      'Just a moment...',
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      setLoadingMessage(messages[messageIndex]);
      messageIndex = (messageIndex + 1) % messages.length; // Cycle through messages
    }, 500); // Change message every 0.5 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(messageInterval); // Clear interval when component unmounts
    };
  }, []);


  return (
    <div>
     {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 relative">
            <img src="/images/cropped_image.png" alt="Loading..." className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-auto" />
          </div>
          <span className="text-2xl font-bold mt-4 animate-pulse">
            {loadingMessage} {/* Display dynamic message */}
          </span>
        </div>
      )}


      <header className="flex flex-col min-h-screen bg-gray-100 ">
        <Header />
        <HeroBanner />
          <FontAwesomeIcon icon={faBriefcase} flip />
          <h1>
            Welcome to the Body Content 
          </h1>
          <p>This is the content of your page.</p>
          <h2 className="text-3xl font-bold">Welcome to QR Login</h2>
          <p className="mt-2 text-gray-600">Scan a QR code to access your account</p>
          <Link href="Login" className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
            Go to Login
          </Link>
      </header>

      <BackToTop />
      <QRCodeGenerator />
      <Footer />
    </div>
  );
};

export default Body;