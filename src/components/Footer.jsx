import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

import vg from "../assets/profile.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={vg} alt="Graphics" />

        <h2>Tushar Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://linkedin.com/in/tushar-kumar-4138701a1"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/iamtusharprajapati" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/tushar8057" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
