import checkBoxNor from "../assets/ic_checkbox_nor.svg"
import checkBoxHov from "../assets/ic_checkbox_hov.svg"
import removeBtnNor from "../assets/btn_remove_nor.svg"
import removeBtnHov from "../assets/btn_remove_hov.svg"
import {useState} from "react";


const Task = ({task,onDeleteFunc, onCompletedFunc}) => {

    const [completed, setCompleted] = useState(true);
    const onCompleted = () => {
        setCompleted((completed)=>!completed);
        onCompletedFunc(task.id);
    }

    return (
      <div className="border-2 border-black flex">
        <div className="border-2 border-black basis-[28px]" onClick={onCompleted}>
            <img src={completed ? checkBoxNor : checkBoxHov} alt=""/>
        </div>
        <div className="border-2 border-black flex-1 text-black">
            {task.content}
        </div>
          <div className="border-2 border-black basis-[28px]" onClick={onDeleteFunc(task.id)}>
              <img src={completed ? removeBtnNor : removeBtnHov} alt=""/>
          </div>
      </div>
    );
}

export default Task;