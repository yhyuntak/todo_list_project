import Todo from "./Todo";

const TodoList = ({todos,onDeleteFunc, onCompletedFunc}) => {

    return (
        <div>
            {Object.entries(todos).map((todo) => (
                    <Todo key={todo[0]} todoObject={todo} onDeleteFunc={onDeleteFunc} onCompletedFunc={onCompletedFunc} />)
            )}
        </div>
    );
}

export default TodoList;