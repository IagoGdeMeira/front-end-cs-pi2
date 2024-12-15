import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo_Enira from "../../../resources/images/Logo_Enira.jpeg"

const Header = () => {
  const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const alterarTema = () => {
    const temaAtual = document.body.getAttribute("data-theme");
    const temaNovo = temaAtual === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", temaNovo);
    localStorage.setItem("theme", temaNovo);
    setIsDarkTheme(temaNovo === "dark");
  };

  useEffect(() => {
    const temaInicial = localStorage.getItem("theme") || "dark";
    document.body.setAttribute("data-theme", temaInicial);
    setIsDarkTheme(temaInicial === "dark");
  }, []);

  // Verifica se o usuário é um admin
  const userType = localStorage.getItem("userType");

  const isAdmin = (userType == 'ADMIN');



  return (
    <div className={styles.header}>
       <img src={Logo_Enira} alt="Logo Enira" className={styles.logo} />
      <nav className={styles.navLeft}>
        <ul>
          <li>
            <Link className={styles.headerNavLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.headerNavLink} to="/new-teacher">
              Cadastrar Professor
            </Link>
          </li>
          <li>
            <Link className={styles.headerNavLink} to="/teacher-list">
              Lista de Professor
            </Link>
          </li>
          <li>
            <Link className={styles.headerNavLink} to="/new-subject">
              Cadastrar Disciplina
            </Link>
          </li>


        </ul>
      </nav>
    </div>
  );
};

export default Header;
