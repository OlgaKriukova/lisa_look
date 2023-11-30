/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from '../../models/Card';
import "./CardItem.scss"

const CardItem: React.FC<Card> = (props) => {

    return(
        <>
        <figure className="card-item">
            <img src={props.img} alt="#" className="card-item__img" />
            <figcaption className="card-item__figcaption">
                <a href={props.link} className="card-item__link">
                    <p className="card-item__text-name">{props.name}</p>
                    <p className="card-item__text-price">{props.price}</p> 
                </a>
            </figcaption>
            <a href="#" className="card-item__in-shop">В магазин &rarr;</a>
        </figure>
        </>
    )
}

export default CardItem;