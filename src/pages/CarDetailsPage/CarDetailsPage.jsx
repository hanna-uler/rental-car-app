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
    console.log("car: ", car)
    // console.log("car.img: ", car.img)
    return (
        <div className={clsx("container", css.container)}>
            {/* <h2 style={{ textAlign: "center", marginTop: "48px" }}>The details will be here soon</h2>
            <h3 style={{ textAlign: "center",marginTop: "36px" }}>Car #{ id}</h3>
            <p style={{ textAlign: "center", marginTop: "36px" }}>If any questions - call us 012-345-67-89</p> */}
            {car
                ? <div className={css.leftSide}>
                    <img src={car.img} alt={`${car.brand} ${car.model}`} />
                    <RentalForm id={id}/>
                </div>
                : <strong>{"Opps, something went wrong. Please, try to refresh the page."}</strong>}
            {/* <div className={css.rightSide}></div> */}
            {car && <CarInfo car={car} />}
        </div>
    )
}