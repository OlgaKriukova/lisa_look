import "./LookBookPage.scss";

import Header from "../Header/Header";
import LookCard from "../LookCard/LookCard";
import Footer from "../Footer/Footer";

const LookBookPage: React.FC = () => {

    return(
        <>
        <Header /> 
        <main className="look-book">
            <h1 className="look-book__title">LookBook</h1>
            <div className="look-book__container">
                <LookCard />
                <LookCard />
                <LookCard />
                <LookCard />
                <LookCard />
            </div>
        </main>
        <Footer />    
        </>
    )
}

export default LookBookPage;