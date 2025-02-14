import Header from './Header';  // Adjust the path if necessary
import HeroBanner from './HeroBanner';
import Footer from './Footer';
import Link from 'next/link';
import QRCodeGenerator from '../components/QRCodeGenerator';
import BackToTop from '../components/BackToTop';
const Body = () => {
  return (
    <div > 
        <header className="flex flex-col min-h-screen bg-gray-100 mx-20">
        <Header />
        <HeroBanner />
        <main >
        <h1 >Welcome to the Body Content</h1>
        <p>This is the content of your page.</p>
        <h2 className="text-3xl font-bold">Welcome to QR Login</h2>
      <p className="mt-2 text-gray-600">Scan a QR code to access your account</p>
      <Link href="Login" className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
        Go to Login
      </Link>
      </main>
        </header>
   
      <BackToTop />
      


      <QRCodeGenerator />;
      

      <Footer />
    </div>
  );
};

export default Body;
