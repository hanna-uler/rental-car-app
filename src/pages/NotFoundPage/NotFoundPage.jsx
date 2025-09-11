import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <>
            <h2>Sorry, the page is not found.</h2>
            <Link to='/'>Go to Home Page</Link>
        </>
    )
}