import { NavLink } from "react-router-dom";
import css from "./Header.module.css"
import clsx from "clsx"
import svgSprite from "../../images/icons.svg"

const buildLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.activeLink);
};
export default function Header() {
    return (
        <div className={css.container}>
            <svg className={css.logo}>
                <use href={`${svgSprite}#icon-logo`} ></use>
            </svg>
            <ul className={css.navList}>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                <NavLink to="/catalog" className={buildLinkClass}>Catalog</NavLink>
            </ul>
        </div>
    )
    
}