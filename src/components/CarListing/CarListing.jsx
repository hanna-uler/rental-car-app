import css from "./CarListing.module.css"

export default function CarListing({cars}) {
    
    return (
        <ul className={css.container}>
            {cars.map((car) => {
                return <li className={css.contactItem}
                    key={car.id}> <p>{ car.brand}</p>
                </li>;
            })}  
        </ul>
    )
}