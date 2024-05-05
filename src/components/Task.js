import checkBoxNor from "../assets/ic_checkbox_nor.svg"
import checkBoxHov from "../assets/ic_checkbox_hov.svg"
import removeBtnNor from "../assets/btn_remove_nor.svg"
import removeBtnHov from "../assets/btn_remove_hov.svg"


const Task = ({task}) => {
    const bool = true;
    return (
      <div className="border-2 border-black flex">
        <div className="border-2 border-black basis-[28px]">
            <img src={bool ? checkBoxNor : checkBoxHov} alt=""/>
        </div>
        <div className="border-2 border-black flex-1 text-black">
            {task.context}
        </div>
          <div className="border-2 border-black basis-[28px]">
              <img src={bool ? removeBtnNor : removeBtnHov} alt=""/>
          </div>
      </div>
    );
}

export default Task;