import { NavLink } from "react-router-dom";
import css from "./Header.module.css"

export default function Header() {
    return (
        <div className={css.container}>
            <p className={css.logo}>Rental<span className={css.logoSpan}>Car</span></p>
            <ul className={css.navList}>
                <NavLink to="/" className={css.navLink}>Home</NavLink>
                <NavLink to="/catalog" className={css.navLink}>Catalog</NavLink>
            </ul>
        </div>
    )
    
}