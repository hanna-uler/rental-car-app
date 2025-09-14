import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarDetails } from "../../redux/cars/operations";

export default function CarDetailsPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCarDetails(id))
}, [dispatch, id])
    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: "48px" }}>The details will be here soon</h2>
            <h3 style={{ textAlign: "center",marginTop: "36px" }}>Car #{ id}</h3>
            <p style={{ textAlign: "center",marginTop: "36px" }}>If any questions - call us 012-345-67-89</p>
        </div>
    )
}