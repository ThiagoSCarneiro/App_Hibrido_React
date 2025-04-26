import styles from "./appBar.module.css";
import { FaHouse, FaGear } from "react-icons/fa6";
import { FaQrcode } from "react-icons/fa";
//import da tag para trocar tela
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <nav className={styles.AppBar}>
      <ul>
        <li>
          {/* tag para troca de tela*/}
          <Link to="/">
            <FaHouse size={32} color="white"/>
          </Link>
        </li>
        <li>
          <Link to="/qr-code">
            <FaQrcode size={32} color="white" />
          </Link>
        </li>
        <li>
          <FaGear size={32} color="white" />
        </li>
      </ul>
    </nav>
  );
}
