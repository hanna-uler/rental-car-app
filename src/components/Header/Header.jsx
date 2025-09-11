import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <p>Rental<span>Car</span></p>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
            </ul>
        </div>
    )
    
}