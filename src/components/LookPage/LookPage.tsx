import "./LookPage.scss"

import Header from "../Header/Header";
import LookCard from "../LookCardItem/LookCardItem";
import CardItem from "../CardItem/CardItem";
import Footer from "../Footer/Footer";

import DressCard from '../../images/dressCard.png';
import SnearesCard from '../../images/sneakersCard.png';
import BagCard from '../../images/bagCard.png';

const LookCardPage: React.FC = () => {

    return(
        <>
        <Header />
        <main className="look-page">
            <h1 className="look-page__title">Романтичный</h1>
            <div className="look-page__container">
                <LookCard />
                <div className="look-page__container-card">
                    <CardItem
                        id = {1}
                        link = {'#'}
                        img={DressCard}
                        name={'Шифоновое платье с поясом LR4552O02-T3'}
                        price={'3000 &#8381;'}
                    />
                    <CardItem 
                        id = {2}
                        link = {'#'}
                        img={SnearesCard}
                        name={'Классические кеды кроссовки белые'}
                        price={'7000 &#8381;'}
                    />
                    <CardItem
                        id = {3}
                        link = {'#'}
                        img={BagCard}
                        name={'Маленькая сумка из натуральной кожи через плечо'}
                        price={'1200 &#8381;'}
                    />

                    <CardItem
                        id = {4}
                        link = {'#'}
                        img={BagCard}
                        name={'Маленькая сумка из натуральной кожи через плечо'}
                        price={'1200 &#8381;'}
                    />

                    <CardItem
                        id = {5}
                        link = {'#'}
                        img={BagCard}
                        name={'Маленькая сумка из натуральной кожи через плечо'}
                        price={'1200 &#8381;'}
                    />  
                    
                </div>
                
            </div>
            
        </main>
        
        <Footer />
        
        </>
    )
}

export default LookCardPage;