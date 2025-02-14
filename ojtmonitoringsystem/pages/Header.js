import Link from 'next/link';

const Header = () => {
  return (
    <header className="header bg-white py-4 shadow-md"> {/* Added Tailwind classes */}
      <div className="container mx-auto px-4 flex justify-between items-center"> {/* Container and flexbox */}
        <Link href="/" className="logo text-xl font-bold text-gray-800 no-underline"> {/* Logo styles */}
          <img src="/images/your-logo.png" alt="Logo" className="h-8 w-auto inline-block mr-2" /> {/* Logo Image */}
            OJT monitoring system 
        </Link>
        <nav className="flex items-center space-x-6"> {/* Navigation container */}
          <ul className="nav-links flex space-x-4"> {/* Nav links container */}
            <li><Link href="/home" className="text-gray-800 hover:text-blue-500 no-underline">Home</Link></li>
            <li><Link href="/about" className="text-gray-800 hover:text-blue-500 no-underline">About us</Link></li>
            <li><Link href="/reviews" className="text-gray-800 hover:text-blue-500 no-underline">Reviews</Link></li>
            <li><Link href="/contact" className="text-gray-800 hover:text-blue-500 no-underline">Contact us</Link></li>
            <li><Link href="/myaccount" className="text-gray-800 hover:text-blue-500 no-underline">My Account</Link></li>
          </ul>
          <div className="auth-links flex space-x-4"> {/* Auth links container */}
            <Link href="/login" className="text-gray-800 hover:text-blue-500 no-underline">Login</Link>
            <span>/</span>
            <Link href="/register" className="text-gray-800 hover:text-blue-500 no-underline">Register</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;