import "./Header.scss";

import logo from "../../images/logo_header_small.png"

const Header: React.FC = () => {

  return (
    <>
     <header className="header">
      <img className="header__logo" src={logo} alt="лого" />
    </header> 
    </>
  )

};

export default Header;
