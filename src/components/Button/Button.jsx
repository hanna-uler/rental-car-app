import css from "./Button.module.css"

export default function Button({ type, text, onClick }) {

    return(
    <button className={css.btn} type={type} onClick={onClick}>{ text }</button>)
}