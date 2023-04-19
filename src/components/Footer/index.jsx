import React from "react";
import facebook from "../../../public/img/facebook.svg";
import twitter from "../../../public/img/twitter.svg";
import instagram from "../../../public/img/instagram.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icones}>
        <a
          href="https://www.facebook.com/heliosalesjr"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a
          href="https://twitter.com/heliosalesjr"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a
          href="https://www.instagram.com/heliosalesjr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Helio Sales Jr.</p>
    </footer>
  );
}