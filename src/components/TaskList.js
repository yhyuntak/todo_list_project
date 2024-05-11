import Task from "./Task";

const TaskList = ({tasks,onDeleteFunc, onCompletedFunc}) => {

    return (
        <div>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDeleteFunc={onDeleteFunc} onCompletedFunc={onCompletedFunc}  />
            ))}
        </div>
    );
}

export default TaskList;