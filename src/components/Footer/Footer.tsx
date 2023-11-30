import "./Footer.scss";
import iconTg from "../../images/icons/iconTelegram.svg";

const Footer: React.FC = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__name">
          &#169; {currentYear} Элиза Быстрова
        </div>
        <div>
        <button className="footer__button">
            <img src={iconTg} alt="#" className="footer__button-icon" />
            <p className="foter__button-text">Написать</p>
        </button>
            
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
