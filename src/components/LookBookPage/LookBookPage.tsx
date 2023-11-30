import "./LookBookPage.scss";

import Header from "../Header/Header";
import LookCardItem from "../LookCardItem/LookCardItem";
import Footer from "../Footer/Footer";

const LookBookPage: React.FC = () => {

    return(
        <>
        <Header /> 
        <main className="look-book">
            <h1 className="look-book__title">LookBook</h1>
            <div className="look-book__container">
                <LookCardItem />
                <LookCardItem />
                <LookCardItem />
                <LookCardItem />
                <LookCardItem />
            </div>
        </main>
        <Footer />    
        </>
    )
}

export default LookBookPage;