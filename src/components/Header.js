import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login")
    }
    const navigateToRegister = () => {
        navigate("/signup")
    }
    return (
        <div className="bg-blue-500 flex justify-between">
            <div className="border-2 border-black flex flex-1">
                <img className="size-10" onClick={navigateToLogin} src={require("../assets/ic_topbar_menu.svg").default} alt=""/>
                <h1 className="text-3xl font-bold text-white">my todo</h1>
            </div>
            <div className="border-2 border-black flex flex-1">
                <span className="flex-1 block border-2 border-amber-200">날짜</span>
                <button className="flex-1" onClick={navigateToRegister}>Sign up</button>
            </div>
        </div>
    );
}

export default Header;