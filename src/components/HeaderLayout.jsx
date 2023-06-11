import { NavLink, Outlet } from "react-router-dom";
import bpIcon from '../bp-icon.png'
const HeaderLayout = () => {
    return (
        <div>
            <header>
                <h1>My BP Journal</h1>
                <img className="logo" src={bpIcon} />
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/journal'>Journal</NavLink>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

export default HeaderLayout;