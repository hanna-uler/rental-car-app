import css from "./CarDetailsPage.module.css"
import clsx from "clsx";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetails } from "../../redux/cars/operations";
import { selectCarDetails } from "../../redux/cars/selectors";
import RentalForm from "../../components/RentalForm/RentalForm";
import CarInfo from "../../components/CarInfo/CarInfo";

export default function CarDetailsPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCarDetails(id))
    }, [dispatch, id])
    const car = useSelector(selectCarDetails);
    return (
        <div className={clsx("container", css.container)}>
            {car
                ? <div className={css.leftSide}>
                    <img className={css.pic} src={car.img} alt={`${car.brand} ${car.model}`} />
                    <RentalForm id={id}/>
                </div>
                : <strong>{"Opps, something went wrong. Please, try to refresh the page."}</strong>}
            {/* <div className={css.rightSide}></div> */}
            {car && <CarInfo car={car} />}
        </div>
    )
}