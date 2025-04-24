import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <img id='logo_header' src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" alt="pito.jpg" />
      <h1>La API de Dragon Ball</h1>
      <NavBar />
    </header>
  )
}

export default Header