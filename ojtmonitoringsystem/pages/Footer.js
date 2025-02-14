import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <p style={textStyles}>© 2025 Your Company Name. All rights reserved.</p>
        <div style={socialLinksStyles}>
          <Link href="https://facebook.com" target="_blank" style={socialLinkStyles}>Facebook</Link>
          <Link href="https://twitter.com" target="_blank" style={socialLinkStyles}>Twitter</Link>
          <Link href="https://instagram.com" target="_blank" style={socialLinkStyles}>Instagram</Link>
        </div>
      </div>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyles = {
  fontSize: '1rem',
  marginBottom: '10px',
};

const socialLinksStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
};

const socialLinkStyles = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s',
};

socialLinkStyles[':hover'] = {
  color: '#007bff',
};

export default Footer;
