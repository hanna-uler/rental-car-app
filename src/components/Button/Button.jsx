import css from "./Button.module.css"

export default function Button({ type = "button", onClick, text }) {

    return(
    <button className={css.btn} type={type} onClick={onClick} >{ text }</button>)
}