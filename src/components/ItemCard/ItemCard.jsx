import css from "./ItemCard.module.css"
import LinkButton from "../LinkButton/LinkButton";
import svgSprite from "../../images/icons.svg"
export default function ItemCard({ car }) {
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
    const addressParts = address.split(",").map(part => part.trim());
    const city = addressParts[addressParts.length - 2];
    const country = addressParts[addressParts.length - 1]; 
    const formattedMileage = mileage.toLocaleString("en-US").replace(",", " ");

    return (
        <div className={css.container}>
            <div>
                <div className={css.imgWrapper}>
                    <img className={css.img} src={img} alt={`${brand} ${model} ${year}`} />
                    <button className={css.likeBtn} type="button">
                        <svg className={css.icon}>
                            {/* {isFavorite && <use href={`${svgSprite}#icon-like-active`} width={16} height={16}>
                            </use>} */}
                            <use href={`${svgSprite}#icon-like-empty`} width={16} height={16}></use>
                        </svg>
                    </button>
                </div>
                <div className={css.descrWrapper}>
                    <div className={css.mainInfo}>
                        <p className={css.modelInfo}>{brand} <span className={css.modelAccent}>{model}</span>, {year}</p>
                        <p>${ rentalPrice}</p>
                    </div>
                    <div className={css.adInfo}>
                        <div className={css}>
                            <p>{ city}</p>
                            <p>{ country}</p>
                            <p>{ rentalCompany}</p>
                        </div>
                        <div className={css}>
                            <p>{ type}</p>
                            <p>{ formattedMileage} km</p>
                        </div>
                    </div>
                </div>
            </div>
            <LinkButton text={"Read more"} path={`/catalog/${id}`} />
        </div>
    )
}