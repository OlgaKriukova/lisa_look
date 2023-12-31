import "./LookCard.scss";
// import { Link } from "react-router-dom";

import TeamCardImg from "../../images/teamCard.png"
import TeamCardImg2 from "../../images/teamCard2.png";
import TeamCardImg3 from "../../images/teamCard3.png";

const LookCard: React.FC = () => {

    return(
        <>
        <div className="look-card">
            <img src={TeamCardImg} alt="#" className="look-card__img" />
            <img src={TeamCardImg2} alt="#" className="look-card__img" />
            <img src={TeamCardImg3} alt="#" className="look-card__img" />

        </div>
        </>
    )
}

export default LookCard;