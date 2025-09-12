import css from "./CatalogPage.module.css"
import Filters from "../../components/Filters/Filters"

export default function CatalogPage() {
    return (
        <div className={css.container}>
            <Filters/>
        </div>
    )
}