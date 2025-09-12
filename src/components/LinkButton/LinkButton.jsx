import { Link } from "react-router-dom"
import css from "./LinkButton.module.css"

export default function LinkButton({ text, path }) {

    return (
        <Link className={css.btn} to={path}>{text}</Link>
    )
    // <button className={css.btn} type={type} onClick={onClick}>{ text }</button>)
}