import "../Footer.css";
import symbol from "../assets/symbol-eyes.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div className="outerDiv">
        <div className="about-us">
          <h2>ABOUT US</h2>
          <p>
            At Luminous, we believe that beauty and health should go hand in
            hand. That's why we are dedicated to creating high-quality,
            additive-free makeup products that enhance your natural beauty
            without compromising your well-being.
          </p>
          <p>
            Our passion for beauty drives us to ensure that everyone, regardless
            of budget, can access premium, safe, and effective makeup. We are
            committed to transparency, sustainability, and empowering
            individuals to feel confident in their own skin. Discover the
            Luminous difference and let your beauty shine naturally!
          </p>
        </div>
        <div className="socials">
          <h2>OUR SOCIALS</h2>
          <li className="social-icons">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <span>Luminous Co.</span>
          </li>
          <li className="social-icons">
            <FontAwesomeIcon icon={faInstagram} size="2x"/> 
            <span>Luminousbeauty</span>
          </li>
          <li className="social-icons">
          <FontAwesomeIcon icon={faTwitter} size="2x"/> 
          <span>Luminousbeauty</span>
          </li>
        </div>
      </div>
      <img src={symbol} alt="Luminous symbol" className="symbol-image" />
      <hr className="line"/>
      <p className="copyright">© Luminous 2024</p>
    </footer>
  );
}
