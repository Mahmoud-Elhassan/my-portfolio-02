import { useRef } from "react";
//
import logo from "../images/my-personal-logo.svg";
import developer from "../images/developer.svg";
import menu from "../images/iconmonstr-menu-1.svg";

const Hero = () => {
  // window.addEventListener("load", () => {
  //   document.querySelector("#hero").classList.add("loaded");
  // });
  const preLoaderToggle = () => {
    document.querySelector("#hero").classList.add("loaded");
  };
  //
  const menuRef = useRef(null);
  const menuToggle = () => menuRef.current.classList.toggle("open-menu");
  const closeMenu = () => {
    if (menuRef.current.classList.contains("open-menu")) {
      menuRef.current.classList.remove("open-menu");
    }
  };
  //
  return (
    <section onLoad={() => preLoaderToggle()} id="hero">
      <nav>
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <ul ref={menuRef}>
          <li>
            <a href="#hero" onClick={closeMenu}>
              &lt;Home/&gt;
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              &lt;About/&gt;
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              &lt;Work/&gt;
            </a>
          </li>
          <li>
            <a href="#skills-container" onClick={closeMenu}>
              &lt;Skills/&gt;
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              &lt;Contact/&gt;
            </a>
          </li>
        </ul>
        <img src={menu} alt="" className="menu-toggle" onClick={menuToggle} />
      </nav>
      <div className="hero-content">
        <div className="ls-hero">
          <p>
            Hi👋 my name is
            <br />
            <b>MAHMOUD ALI</b>
            <br />
            Web developer
          </p>
          <a href="#contact">Contact me</a>
        </div>
        <>
          <img src={developer} alt="developer" />
        </>
      </div>
      <div className="loader-wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </section>
  );
};

export default Hero;
