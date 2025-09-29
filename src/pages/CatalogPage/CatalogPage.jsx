import css from "./CatalogPage.module.css"
import clsx from "clsx"
import Filters from "../../components/Filters/Filters"
import CarListing from "../../components/CarListing/CarListing"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectCarList, selectPage, selectTotalPages } from "../../redux/cars/selectors"
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
    const totalPages = useSelector(selectTotalPages);

    useEffect(() => {
        dispatch(getCarList({ brand, rentalPrice, minMileage, maxMileage, page}))
    }, [dispatch, brand, rentalPrice, minMileage, maxMileage, page])

    const handelLoadMore = () => {
        dispatch(updPageNumber())
    }
    const carList = useSelector(selectCarList);
    return (
        <div className={clsx("container", css.container)}>
            <Filters />
            {carList.length > 0 && <CarListing cars={carList} />}
            {page < totalPages && <Button text="Load more" onClick={handelLoadMore} style="btnTransp"/>}
        </div>
    )
}