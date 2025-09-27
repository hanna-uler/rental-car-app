import toast from "react-hot-toast"
import Button from "../Button/Button"
import css from "./RentalForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"; 
import clsx from "clsx";

export default function RentalForm({id}) {
    const initValues = {
        name: "",
        email: "",
        bookingDate: "",
        comment: ""
    }
    const rentValidSchema = yup.object().shape({
        name: yup.string().required("Name is a required field"),
        email: yup.string().email("Invalid email address").required("Email is a required field"),
        bookingDate: yup.date().min(new Date(), "The date in the past con not be chosen."),
        comment: yup.string()
    })
    const handleFormSubmit = (values, actions) => {
        const rentData = { ...values, carId: id };
        toast.success("Thank you! We've received your request.");
        console.log("The form has been submitted. Here is the submitted data: ", rentData)
        actions.resetForm();
    }
    return (
        <div className={css.container}>
            <h2 className={css.title}>Book your car now</h2>
            <p className={css.descr}>Stay connected! We are always ready to help you.</p>
            <Formik initialValues={initValues} validationSchema={rentValidSchema} onSubmit={handleFormSubmit}>
                <Form className={css.form}>
                    <Field className={css.input} type="text" name="name" placeholder="Name*"></Field>
                    <ErrorMessage className={css.errorMesssage} name="name" component="span" />
                    <Field className={css.input} type="email" name="email" placeholder="Email*"></Field>
                    <ErrorMessage className={css.errorMesssage} name="email" component="span" />
                    <Field className={css.input} type="date" name="bookingDate" placeholder="Booking date"></Field>
                    <ErrorMessage className={css.errorMesssage} name="bookingDate" component="span" />
                    <Field className={clsx(css.input, css.textarea)} as="textarea" rows="4" name="comment" placeholder="Comment"></Field>
                    <ErrorMessage className={css.errorMesssage} name="comment" component="span" />
                    <Button text="Send" type="submit"/>
            </Form>
            </Formik>
        </div>
    )
}