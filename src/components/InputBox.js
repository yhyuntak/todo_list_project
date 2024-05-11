import sendNor from "../assets/ic_send_nor.svg";
import deleteImg from "../assets/ic_delete.svg";

const InputBox = ({value,placeHolder,onClickFunc, onChangeFunc}) => {
    //
    // const [text,setText] = useState('');
    //
    // const onChange = (e) => {
    //     setText(e.target.value);
    // }
    // const onDelete = (e) => {
    //     setText('');
    // }

    const onKeyDownEvent = (e) => {
        if (e.key === "Enter") {
            // e.preventDefault(); // 이게 필요한가?
            onClickFunc();
        }
    }

    return (
        <div className="flex">
            <input className="flex-1 border-2" name="inputBox" placeholder={placeHolder} value={value} onChange={onChangeFunc}
            onKeyDown={onKeyDownEvent}/>
            {/*<img className={[*/}
            {/*    text.length === 0 ? "hidden" : ""*/}
            {/*].join(" ")} src={deleteImg} onClick={onDelete} alt=""/>*/}
            <img className="basis-4" src={sendNor} onClick={onClickFunc} alt=""/>
        </div>
    );
}

export default InputBox;