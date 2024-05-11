import InputBox from "../components/InputBox";
import {useEffect, useRef, useState} from "react";
import TodoList from "../components/TodoList";
import todo from "../components/Todo";

const Home = () => {

    const [username, setUsername] = useState("");

    const [taskId, setTaskId] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);
    const [totalTasks, setTotalTasks] = useState(0);

    const [taskContent, setTaskContent] = useState("");

    const [todos, setTodos] = useState({
        1: {
            content: "hello",
            completed: false
        },
        2: {
            content: "hello 2",
            completed: false
        },
        3: {
            content: "hello 3",
            completed: false
        }
    });

    useEffect(() => {
        // storage에서 username 가져오기
        const storedUsername = sessionStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
        // 초기 task의 수에 따라 taskId state 설정해주기
        setTaskId(Object.keys(todos).length + 1);
    },[])

    useEffect(() => {
        // tasks의 변화가 감지될 때마다 전체 tasks의 수를 가져와야함.
        // 전체 tasks의 수 가져오기
        setTotalTasks(Object.keys(todos).length);
    },[todos])

    const onChangeFunc = (e) => {
        setTaskContent(e.target.value);
    }

    const onClickFunc = () => {

        const newTodo = {
            [taskId] : {
                content: taskContent,
                completed: false
            }
        };
        setTodos({
            ...todos,
            ...newTodo
        });

        setTaskContent("");
        setTaskId((taskId) => taskId + 1);
    }

    const onDeleteFunc = (currentId) => {
        return(
            () => {
                const {[currentId]: _, ...remainingTodos} = todos;
                setTodos(remainingTodos);

                // 만약 completed가 true인게 삭제되면 completed의 수도 줄여줘야한다.
                if(todos[currentId].completed){
                    setCompletedTasks((completedTasks) => completedTasks - 1);
                }
            }
        )
    }

    const onCompletedFunc = (currentId) => {
        // todoid를 받아와야하네. completed 는 받아올 필요가 없다. 어차피 !로 토글하면 되니까.
        setTodos(todos => ({
            ...todos,
            [currentId]: {
                ...todos[currentId],
                completed: !todos[currentId].completed
            },
        }))
        // 그리고 completed 상태에 따라 completed를 올려줘야한다.
        // 그런데 setter들은 한번에 배치로 올라가니까, 위에서 setTodos를 사용했다고해서 todos[currentId].completed 가 바로 업데이트되는 것은 아니다.
        // 따라서 이전 상태(!todos[currentId].completed)의 반대로 처리하면 된다.
        if(!todos[currentId].completed){
            setCompletedTasks((completedTasks) => completedTasks + 1);
        } else {
            setCompletedTasks((completedTasks) => completedTasks - 1);
        }
    }

    return (
        <div className="flex flex-col">
            <div className="text-2xl flex-1">
                <p>{setGreetingStr()}, {username}</p>
                <p>You've got</p>
                <p className="text-5xl">{completedTasks}/{totalTasks}</p>
                <p>task Today!</p>
                <InputBox value={taskContent} placeHolder="input your task" onChangeFunc={onChangeFunc} onClickFunc={onClickFunc} />
            </div>
            <div className={[
                totalTasks === 0 ? "bg-[url('./assets/illust_empty.svg')]":"bg-rose-600",
                "h-[400px]",
                "bg-cover"
                ].join(" ")}>
                <TodoList todos={todos} onDeleteFunc={onDeleteFunc} onCompletedFunc={onCompletedFunc} />
            </div>
        </div>

    );
}

const setGreetingStr = () => {
    const todayHours = new Date().getHours();
    let greetingStr = "";
    if (todayHours < 12 && todayHours >= 6) {
        greetingStr = "Good morning";
    } else if (todayHours >= 12 && todayHours < 18 ) {
        greetingStr = "Good afternoon";
    } else {
        greetingStr = "Good evening";
    }
    return greetingStr;
}

export default Home;
