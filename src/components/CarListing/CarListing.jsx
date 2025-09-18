import css from "./CarListing.module.css"
import ItemCard from "../ItemCard/ItemCard";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";

export default function CarListing({ cars }) {
    const favorites = useSelector(selectFavorites);
    return (
        <ul className={css.container}>
            {cars.map((car) => {
                const isFavorite = favorites.includes(car.id);
                return <li className={css.card}
                    key={car.id}><ItemCard car={car} isFavorite={isFavorite} />
                </li>;
            })}  
        </ul>
    )
}