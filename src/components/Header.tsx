import "../Header.css";
import logotype from "../assets/logotyp.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header>
      <img src={logotype} alt="Luminous" />
      <FontAwesomeIcon icon={faBars} className="hamburger-menu"/> 
      <nav>
        <ul>
          <li>New in</li>
          <li>Eyes</li>
          <li>Face</li>
          <li>Brows</li>
          <li>Lips</li>
          <li>Sets</li>
          <li>Gift card</li>
          <li>Outlet</li>
        </ul>
      </nav>
    </header>
  );
}
