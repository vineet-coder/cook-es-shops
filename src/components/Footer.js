import { SiGmail } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul className="footer-list">
          <li className="footer-list-item">
            <SiGmail />
          </li>
          <li className="footer-list-item">
            <FiInstagram />
          </li>
          <li className="footer-list-item">
            <AiOutlineTwitter />
          </li>
        </ul>

        <img
          src="./images/susie-ilus-header.png"
          alt="fotterImg"
          className="footer-img"
        />
      </footer>{" "}
    </>
  );
};
