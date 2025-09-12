import css from "./HomePage.module.css"
import Button from "../../components/LinkButton/LinkButton"

export default function HomePage() {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <div className={css.titlesWrapper}>
                    <h1 className={css.title}>Find your perfect rental car</h1>
                    <h2 className={css.subTitle}>Reliable and budget-friendly rentals for any journey</h2>
                </div>
                <Button text={"View Catalog"} path={"/catalog"}/>
            </div>
        </div>
    )
}