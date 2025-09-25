import css from "./CarInfo.module.css"
// import svgSprite from "../../images/icons.svg"

export default function CarInfo({ car }) {
    const {
        id,
        year = "N/A",
        brand,
        model = "N/A",
        // type = "N/A",
        rentalPrice,
        mileage,
        // rentalCompany = "N/A",
        address = "N/A",
        description
    } = car;
    const addressParts = address.split(",").map(part => part.trim());
    const city = addressParts[addressParts.length - 2];
    const country = addressParts[addressParts.length - 1]; 
    console.log("mileage: ", mileage);
    const formattedMileage = mileage.toLocaleString("en-US").replace(",", " ");
    
    return (
        <div className={css.container}>
            <div className={css.mainInfo}>
                <div className={css.titleLine}>
                    <h2>{`${brand} ${model}, ${year}`}</h2>
                    <p>{`Id: ${id}`}</p>
                </div>
                <div className={css.addrLine}>
                    {/* <svg className={css.icon}><use href={`${svgSprite}#icon-location`}></use></svg> */}
                    <p className={css.location}>{`${city}, ${country}`}</p>
                    <p>{ `Mileage: ${formattedMileage} km`}</p>
                </div>
                <p>{`$${rentalPrice}`}</p>
                <p>{ description}</p>
            </div>
            <div className={css.detailsBlock}></div>
        </div>
    )
}