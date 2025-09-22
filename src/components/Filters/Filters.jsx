import css from "./Filters.module.css"
import Select, {components} from "react-select"
import { useEffect } from "react"
import { Formik, Form, Field } from "formik"
import { useSelector, useDispatch } from "react-redux"
import { selectBrands } from "../../redux/brands/selectors"
import { getBrands } from "../../redux/brands/operations"
import { resetFilters, updFilters } from "../../redux/filters/slice"
import { resetPages } from "../../redux/cars/slice"
import MileageInput from "../MileageInput/MileageInput"
// import svgSprite from "../../images/icons.svg"
import Button from "../Button/Button"
import clsx from "clsx"

const priceOptions = [
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
    { value: "70", label: "70" },
    { value: "80", label: "80" },
]

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
    const formatBrands = brands.map((brand) => ({
        value: brand,
        label: brand
    }))

    const dropDownStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: "12px",
            padding: "0 4px",
            background: "var(--inputs)",
            minHeight: "44px",
            minWidth: "204px",
            border: "none",
            boxShadow: "none",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: 1.25,
            color: "var(--main)",
            "&:hover": {
              border: "none",
            },
        }),
         menu:(provided) => ({
            ...provided,
            border: "1px solid var(--inputs)",
            borderRadius: "12px",
            minWidth: "204px",
            boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
            background: "var(--white)",
            marginTop: "4px",
            padding: "12px 8px",
        }),
         menuList: (provided) => ({
            ...provided,
            maxHeight: "272px",
            "::-webkit-scrollbar": {
                width: "8px",
            },
            "::-webkit-scrollbar-track": {
                background: "transparent",
                border: "none"
            },
            "::-webkit-scrollbar-thumb": {
                background: "var(--gray-light)",
                borderRadius: "10px",
             },
            scrollbarWidth: "8px",
            scrollbarColor: "var(--gray-light)",
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "var(--main)" : "var(--gray)",
            background: "var(--white)"
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            // color: "transparent"
        }),
        indicatorSeparator:(provided) => ({
            ...provided,
            display: "none"
        }),
        placeholder: (provided) => ({
            ...provided,
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "1.25",
            color: "var(--main)"
        }),
        loadingIndicator:(provided) => ({
            ...provided,
            color: "var(--gray)"
        }),
    };

    const customSelectPriceValue = (props) => (
        <components.SingleValue {...props}>
            {`To $${props.data.label}`}
        </components.SingleValue>
    )
    const onFormSubmit = (values) => {
        dispatch(resetFilters())
        dispatch(resetPages())
        dispatch(updFilters(values))
        // actions.resetForm()
    }

    return (
        <Formik initialValues={initValues} onSubmit={onFormSubmit}>
            {({ setFieldValue, values }) => (
                <Form className={css.form}>
                    <div className={css.fieldWrapper}>
                        <label className={css.label} htmlFor="carBrandField">Car brand</label>
                        <Select
                            id="carBrandField" 
                            name="brand" 
                            options={formatBrands} 
                            value={formatBrands.find((opt) => opt.value === values.brand)}
                            onChange={(option) => {
                                if (option === null) {
                                    setFieldValue("brand", "")
                                } else {
                                    setFieldValue("brand", option.value)}
                                }
                            }
                            placeholder="Choose a brand"
                            isClearable={true}
                            isSearchable={true}
                            isLoading={formatBrands.length === 0}
                            styles={dropDownStyles}
                        />
                        {/* <svg className={css.icon}>
                            <use href={`${svgSprite}#icon-select-error-default`}>
                            </use>
                        </svg> */}
                    </div>
                    <div className={css.fieldWrapper}>
                        <label className={css.label} htmlFor="rentalPriceField">Price/ 1 hour</label>
                        <Select
                            id="rentalPriceField"
                            name="rentalPrice"
                            options={priceOptions}
                            value={priceOptions.find((opt) => opt.value === values.rentalPrice)}
                            onChange={(option) => {
                                if (option === null) {
                                    setFieldValue("rentalPrice", "")
                                } else {
                                    setFieldValue("rentalPrice", option.value)
                                }
                            }}
                            styles={dropDownStyles}
                            placeholder="Choose price"
                            isClearable={true}
                            isSearchable={true}
                            components={{SingleValue: customSelectPriceValue}}
                        />
                        {/* <svg className={css.icon}>
                            <use href={`${svgSprite}#icon-select-error-default`}>
                            </use>
                        </svg> */}
                    </div>
                    <div className={css.fieldWrapper}>
                        <label className={css.label} htmlFor="milageField">Car mileage / km</label>
                        <div className={css.milageWrapper}>
                            <Field className={clsx(css.input, css.minMilInput)} name="minMileage" id="milageField" placeholder="From" prefix="From " component={MileageInput} />
                            <Field className={clsx(css.input, css.maxMilInput)} name="maxMileage" id="milageField" placeholder="To" prefix="To " component={MileageInput}/>
                        </div>
                    
                    </div>
                    <Button type={"submit"} text={"Search"}/>
                </Form>)}
        </Formik>
    )
}