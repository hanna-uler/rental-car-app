import css from "./ItemCard.module.css"
import LinkButton from "../LinkButton/LinkButton";
import svgSprite from "../../images/icons.svg"
import { useDispatch } from "react-redux";
import { addToFavs, deleteFromFavs } from "../../redux/favorites/slice";

export default function ItemCard({ car, isFavorite }) {
    const {
        id,
        img,
        year = "N/A",
        brand,
        model = "N/A",
        type = "N/A",
        rentalPrice,
        mileage,
        rentalCompany = "N/A",
        address = "N/A"
    } = car;

    const dispatch = useDispatch();
    const handleFavClick = () => {
        if (isFavorite) {
            dispatch(deleteFromFavs(id))
        } else {
            dispatch(addToFavs(id))
        }
    }
    
    const addressParts = address.split(",").map(part => part.trim());
    const city = addressParts[addressParts.length - 2];
    const country = addressParts[addressParts.length - 1]; 
    const formattedMileage = mileage.toLocaleString("en-US").replace(",", " ");

    return (
        <>
                <div className={css.imgWrapper}>
                    <img className={css.img} src={img} alt={`${brand} ${model} ${year}`} />
                    <button className={css.likeBtn} type="button" onClick={handleFavClick}>
                        <svg className={css.likeIcon}>
                            {isFavorite
                                ? <use href={`${svgSprite}#icon-like-active`} width={16} height={16}>
                                </use>
                                : <use href={`${svgSprite}#icon-like-empty`} width={16} height={16}></use>}
                        </svg>
                    </button>
                </div>
                <div className={css.descrWrapper}>
                    <div className={css.mainInfo}>
                        <p className={css.modelInfo}>{brand} <span className={css.modelAccent}>{model}</span>, {year}</p>
                        <p className={css.price}>${ rentalPrice}</p>
                    </div>
                    <div className={css.adInfo}>
                    <div className={css.genDetailsWrapper}>
                            <p className={css.genDetailsItem}>{city}</p>
                            <svg className={css.dividerIcon}><use href={`${svgSprite}#icon-divider`}></use></svg>
                            <p className={css.genDetailsItem}>{country}</p>
                            <svg className={css.dividerIcon}><use href={`${svgSprite}#icon-divider`}></use></svg>
                            <p className={css.genDetailsItem}>{rentalCompany}</p>
                            <svg className={css.dividerIcon}><use href={`${svgSprite}#icon-divider`}></use></svg>
                        </div>
                        <div className={css.genDetailsWrapper}>
                            <p className={css.genDetailsItem}>{type}</p>
                            <svg className={css.dividerIcon}><use href={`${svgSprite}#icon-divider`}></use></svg>
                            <p className={css.genDetailsItem}>{formattedMileage} km</p>
                        </div>
                    </div>
                </div>
                <LinkButton text={"Read more"} path={`/catalog/${id}`} />
        </>
    )
}