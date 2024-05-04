import {useNavigate} from "react-router-dom";

const InputBox = (props) => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/")
    }
    return (
        <div className="flex">
            <input className="flex-1 border-2" placeholder={props.placeHolder}/>
            <img className="basis-4" onClick={navigateToHome} src={require("../assets/ic_send_nor.svg").default} alt=""/>
        </div>
    );
}

export default InputBox;