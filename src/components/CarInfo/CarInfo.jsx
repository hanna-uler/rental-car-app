import css from "./CarInfo.module.css"
import svgSprite from "../../images/icons.svg"
import SpecList from "../SpecList/SpecList";
import CarSpec from "../CarSpec/CarSpec";

export default function CarInfo({ car }) {
    const {
        id,
        year = "N/A",
        brand,
        model = "N/A",
        rentalPrice,
        mileage,
        address = "N/A",
        description
    } = car;
    const displayedId = id.slice(-4);
    const addressParts = address.split(",").map(part => part.trim());
    const city = addressParts[addressParts.length - 2];
    const country = addressParts[addressParts.length - 1]; 
    console.log("mileage: ", mileage);
    const formattedMileage = mileage.toLocaleString("en-US").replace(",", " ");
    const accesAndFuncs = [...car.accessories, ...car.functionalities]
    
    return (
        <div className={css.container}>
            <div className={css.mainInfo}>
                <div className={css.titleLine}>
                    <h2>{`${brand} ${model}, ${year}`}</h2>
                    <p className={css.id}>{`Id: ${displayedId}`}</p>
                </div>
                <div className={css.addrLine}>
                    <svg className={css.icon}><use href={`${svgSprite}#icon-location`}></use></svg>
                    <p className={css.location}>{`${city}, ${country}`}</p>
                    <p className={css.mileage}>{ `Mileage: ${formattedMileage} km`}</p>
                </div>
                <p className={css.price}>{`$${rentalPrice}`}</p>
                <p>{ description}</p>
            </div>
            <div className={css.detailsBlock}>
                <SpecList title={"Rental Conditions:"} items={car.rentalConditions} />
                <CarSpec car={car}/>
                <SpecList title={"Accessories and functionalaties:"} items={accesAndFuncs}/>
            </div>
        </div>
    )
}