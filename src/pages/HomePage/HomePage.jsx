import css from "./HomePage.module.css"
import Button from "../../components/Button/Button"

export default function HomePage() {
    const handleClick = () => {
        console.log("Hero click made")
    }
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <div className={css.titlesWrapper}>
                    <h1 className={css.title}>Find your perfect rental car</h1>
                    <h2 className={css.subTitle}>Reliable and budget-friendly rentals for any journey</h2>
                </div>
                <Button type={"button"} text={"View Catalog"} onClick={handleClick}/>
            </div>
        </div>
    )
}