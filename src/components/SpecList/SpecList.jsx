import css from "./SpecList.module.css"
import svgSprite from "../../images/icons.svg"

export default function SpecList({ title, items }) {
    return (
        <div className={css.container}>
            <h3 className={css.title}>{ title}</h3>
            <ul className={css.list}>
                {items.map((item, index) => {
                    return (
                        <li className={css.listItem} key={index}>
                            <svg className={css.icon}><use href={`${svgSprite}#icon-check-circle`}></use></svg>
                            <p className={css.textLine}>{item}</p>
                        </li>)
                    
                })}
            </ul>
        </div>
    )
}