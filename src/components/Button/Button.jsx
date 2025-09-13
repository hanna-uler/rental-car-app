import css from "./Button.module.css"

export default function Button({ type = "button", text }) {

    return(
    <button className={css.btn} type={type} >{ text }</button>)
}