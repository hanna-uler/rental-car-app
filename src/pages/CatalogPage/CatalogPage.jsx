import css from "./CatalogPage.module.css"
import Filters from "../../components/Filters/Filters"
import CarListing from "../../components/CarListing/CarListing"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectCarList, selectPage, selectLimit, selectTotalPages } from "../../redux/cars/selectors"
import { selectBrandFilter, selectPriceFilter, selectMinMileageFilter, selectMaxMileageFilter } from "../../redux/filters/selectors"
import { getCarList } from "../../redux/cars/operations"
import Button from "../../components/Button/Button"
import { updPageNumber } from "../../redux/cars/slice"

export default function CatalogPage() {
    const dispatch = useDispatch();
    const brand = useSelector(selectBrandFilter);
    const minMileage = useSelector(selectMinMileageFilter);
    const maxMileage = useSelector(selectMaxMileageFilter);
    const rentalPrice = useSelector(selectPriceFilter);
    const page = useSelector(selectPage);
    const limit = useSelector(selectLimit);
    const totalPages = useSelector(selectTotalPages);
    useEffect(() => {
        dispatch(getCarList({ brand, rentalPrice, minMileage, maxMileage, page, limit}))
    }, [dispatch, brand, rentalPrice, minMileage, maxMileage, page, limit])

    const handelLoadMore = () => {
        dispatch(updPageNumber())
    }
    const carList = useSelector(selectCarList);
    return (
        <div className={css.container}>
            <Filters />
            {carList.length > 0 && <CarListing cars={carList} />}
            {page < totalPages && <Button text="Load more" onClick={handelLoadMore} />}
        </div>
    )
}