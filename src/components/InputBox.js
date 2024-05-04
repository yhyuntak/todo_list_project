
const InputBox = ({placeHolder,onClick}) => {

    return (
        <div className="flex">
            <input className="flex-1 border-2" placeholder={placeHolder}/>
            <img className="basis-4" onClick={onClick} src={require("../assets/ic_send_nor.svg").default} alt=""/>
        </div>
    );
}

export default InputBox;