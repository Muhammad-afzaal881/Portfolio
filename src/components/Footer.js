import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>
            We are committed to delivering top-quality web experiences through innovation,
            creativity, and attention to detail.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: malikafzaalali5@gmail.com</p>
          <p>Phone: +92 123 4567890</p>
          <p>Location: Lahore, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Afzaal Web Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
