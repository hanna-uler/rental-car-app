import clsx from "clsx"

export default function Button({ type = "button", onClick, text, style }) {

    return(
    <button className={clsx("btn", style)} type={type} onClick={onClick} >{ text }</button>)
}