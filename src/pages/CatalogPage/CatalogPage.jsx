import css from "./CatalogPage.module.css"
import Filters from "../../components/Filters/Filters"
import CarListing from "../../components/CarListing/CarListing"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectCarList } from "../../redux/cars/selectors"
import { selectBrandFilter, selectPriceFilter, selectMinMileageFilter, selectMaxMileageFilter } from "../../redux/filters/selectors"
import { getCarList } from "../../redux/cars/operations"

export default function CatalogPage() {
    const dispatch = useDispatch();
    const brand = useSelector(selectBrandFilter);
    const price = useSelector(selectPriceFilter);
    const minMileage = useSelector(selectMinMileageFilter);
    const maxMileage = useSelector(selectMaxMileageFilter);
    let page = 1;
    useEffect(() => {
        dispatch(getCarList({ brand, price, minMileage, maxMileage, page, limit: 12 }))
        console.log("Effect Get Cars")
    }, [dispatch, brand, price, minMileage, maxMileage, page])

    const carList = useSelector(selectCarList);
    return (
        <div className={css.container}>
            <Filters />
            {carList.length > 0 && <CarListing cars={carList}/>}
        </div>
    )
}