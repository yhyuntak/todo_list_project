import {useState} from "react";
import sendNor from "../assets/ic_send_nor.svg";
import deleteImg from "../assets/ic_delete.svg";

const InputBox = ({placeHolder,onClickFunc}) => {

    const [text,setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }
    const onDelete = (e) => {
        setText('');
    }

    return (
        <div className="flex">
            <input className="flex-1 border-2" placeholder={placeHolder} value={text} onChange={onChange}/>
            <img className={[
                text.length === 0 ? "hidden" : ""
            ].join(" ")} src={deleteImg} onClick={onDelete} alt=""/>
            <img className="basis-4" src={sendNor} onClick={onClickFunc} alt=""/>
        </div>
    );
}

export default InputBox;