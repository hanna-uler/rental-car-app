import toast from "react-hot-toast"
import Button from "../Button/Button"
import css from "./RentalForm.module.css"
import { Formik, Form, Field } from "formik"

export default function RentalForm({id}) {
    const initValues = {
        name: "",
        email: "",
        bookingDate: "",
        comment: ""
    }
    const handleFormSubmit = (values) => {
        const rentData = { ...values, carId: id };
        toast.success("Thank you! We've received your request.");
        console.log("The form has been submitted. Here is the submitted data: ", rentData)
    }
    return (
        <div className={css.container}>
            <h2>Book your car now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <Formik initialValues={initValues} onSubmit={handleFormSubmit}>
                <Form className={css.form}>
                    <Field className={css.input} type="text" name="name" placeholder="Name"></Field>
                    <Field className={css.input} type="email" name="email" placeholder="Email"></Field>
                    <Field className={css.input} type="" name="bookingDate" placeholder="Booking date"></Field>
                    <Field className={css.input} as="textarea" name="comment" placeholder="comment"></Field>
                    <div className={css.btnWrapper}>
                        <Button text="Send" type="submit"/>
                    </div> 
            </Form>
            </Formik>
        </div>
    )
}