import InputBox from "../components/InputBox";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/")
    }
    return (
        <div className="w-[663px]">
            <p className="text-2xl">
                Welcome newbie!! <br/>
                myTodo makes is easy to stay organized and manage your life
            </p>
            <p className="text-4xl font-bold">
                What is your name?
            </p>
            <InputBox placeHolder="input our name" onClick={navigateToHome} />
        </div>
    );
}

export default Login;
