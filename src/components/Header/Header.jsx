import { NavLink } from "react-router-dom";
import css from "./Header.module.css"
import svgSprite from "../../images/icons.svg"

export default function Header() {
    return (
        <div className={css.container}>
            <svg className={css.logo}>
                <use href={`${svgSprite}#icon-logo`} ></use>
            </svg>
            <ul className={css.navList}>
                <NavLink to="/" className={css.navLink}>Home</NavLink>
                <NavLink to="/catalog" className={css.navLink}>Catalog</NavLink>
            </ul>
        </div>
    )
    
}