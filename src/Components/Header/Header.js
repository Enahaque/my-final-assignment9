import React from 'react';
import { Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Reviews">Reviews</Link>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="Blogs">Blogs</Link>
                <Link to="/About">About</Link>
            </nav>
        </div>
    );
};

export default Header;