import {Outlet}  from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
    return (
        <>
            <Header/>
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li><Link to="/">Home</Link></li>*/}
            {/*        <li><Link to="/login">login</Link></li>*/}
            {/*        <li><Link to="/signup">signup</Link></li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            <Outlet />
        </>
    )
}

export default Layout;