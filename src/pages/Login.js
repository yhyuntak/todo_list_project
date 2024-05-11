import InputBox from "../components/InputBox";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Login = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        sessionStorage.setItem("username",username);
        navigate("/");
    }

    const [username, setUsername] = useState("");
    const onChangeFunc = (e) => {
        setUsername(e.target.value);
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
            <InputBox placeHolder="input our name"
                      value={username}
                onClickFunc={navigateToHome}
                onChangeFunc={onChangeFunc}
            />
        </div>
    );
}

export default Login;
