import "../Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="outerDiv">
        <div className="aboutUs">
          <h3>ABOUT US</h3>
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
          <h3>OUR SOCIALS</h3>
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li>
            <a href="https://www.twitter.com/">Twitter</a>
          </li>
        </div>
      </div>
    </footer>
  );
}
