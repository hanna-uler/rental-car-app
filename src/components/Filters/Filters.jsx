import css from "./Filters.module.css"
import { useEffect } from "react"
import { Formik, Form, Field } from "formik"
import { useSelector, useDispatch } from "react-redux"
import { selectBrands } from "../../redux/brands/selectors"
import { getBrands } from "../../redux/brands/operations"
import { resetFilters, updFilters } from "../../redux/filters/slice"
import Button from "../Button/Button"
import clsx from "clsx"

export default function Filters() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch])
    const initValues = {
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
    }

    const brands = useSelector(selectBrands);

    const onFormSubmit = (values) => {
        dispatch(resetFilters())
        dispatch(updFilters(values))
        // actions.resetForm()
    }
    return (
        <Formik initialValues={initValues} onSubmit={onFormSubmit}>
            <Form className={css.form}>
                <div className={css.fieldWrapper}>
                    <label className={css.label} htmlFor="carBrandField">Car brand</label>
                    <Field className={css.input} as="select" name="brand" id="carBrandField">
                        <option key="" value="" disabled>Choose a brand</option>
                        {brands.map((brand) => (<option key={brand} value={brand}>{brand}</option>))}
                    </Field>
                </div>
                <div className={css.fieldWrapper}>
                    <label className={css.label} htmlFor="rentalPriceField">Price/ 1 hour</label>
                    <Field className={css.input} as="select" name="rentalPrice" id="rentalPriceField">
                        <option value="" disabled>Choose price</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                    </Field>
                </div>
                <div className={css.fieldWrapper}>
                    <label className={css.label} htmlFor="milageField">Car mileage / km</label>
                    <div className={css.milageWrapper}>
                        <Field className={clsx(css.input, css.minMilInput)} name="minMileage" id="milageField" placeholder="From"/>
                        <Field className={clsx(css.input, css.maxMilInput)} name="maxMileage" id="milageField" placeholder="To"/>
                    </div>
                    
                </div>
                <Button type={"submit"} text={"Search"}/>
            </Form>
        </Formik>
    )
}