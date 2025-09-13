import css from "./CarListing.module.css"
import ItemCard from "../ItemCard/ItemCard";

export default function CarListing({cars}) {
    
    return (
        <ul className={css.container}>
            {cars.map((car) => {
                return <li className={css.card}
                    key={car.id}><ItemCard car={ car } />
                </li>;
            })}  
        </ul>
    )
}