import css from "./CarSpec.module.css"
import svgSprite from "../../images/icons.svg"

export default function CarSpec({ car }) {
    const { fuelConsumption, engineSize, type, year } = car;
    return (
        <div className={css.container}>
            <h3 className={css.title}>Car Specifications:</h3>
            <ul className={css.list}>
                <li>
                    <svg className={css.icon}><use href={`${svgSprite}#icon-calendar`}></use></svg>
                    <p className={css.descr}>{`Year: ${year}`}</p>
                </li>
                <li>
                    <svg className={css.icon}><use href={`${svgSprite}#icon-car`}></use></svg>
                    <p className={css.descr}>{`Type: ${type}`}</p>
                </li>
                <li>
                    <svg className={css.icon}><use href={`${svgSprite}#icon-fuel-pump`}></use></svg>
                    <p className={css.descr}>{`Fuel Consumption: ${fuelConsumption}`}</p>
                </li>
                <li>
                    <svg className={css.icon}><use href={`${svgSprite}#icon-gear`}></use></svg>
                    <p className={css.descr}>{`Engine Size: ${engineSize}`}</p>
                </li>
            </ul>
        </div>
    )
}