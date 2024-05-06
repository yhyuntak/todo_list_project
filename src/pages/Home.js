import InputBox from "../components/InputBox";
import {useEffect, useRef, useState} from "react";
import TaskList from "../components/TaskList";

const Home = () => {

    const [username, setUsername] = useState("");

    const [numOfTasks, setNumOfTasks] = useState({
        numOfTask : 0,
        totalTask : 0
    });

    const [taskContent, setTaskContent] = useState("");

    const [tasks,setTasks]  = useState([
        {
            id: 1,
            content: "hello",
            completed: false
        },
        {
            id: 2,
            content: "hello 2",
            completed: false
        },
        {
            id: 3,
            content: "hello 3",
            completed: false
        },
    ])

    const nextId = useRef(4);

    useEffect(() => {
        // storage에서 username 가져오기
        const storedUsername = sessionStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    },[])

    useEffect(() => {
        // tasks의 변화가 감지될 때마다 전체 tasks의 수를 가져와야함.
        // 전체 tasks의 수 가져오기
        const totalTasksLen = tasks.length;
        setNumOfTasks({
            numOfTask : tasks.filter(task => task.completed).length,
            totalTasks : tasks.length
        })
    },[tasks])

    const { numOfTask,  totalTasks } = numOfTasks;

    const onChangeFunc = (e) => {
        setTaskContent(e.target.value);
    }


    const onClickFunc = () => {
        const task = {
            id: nextId.current,
            content: taskContent,
            completed: false
        };
        setTasks([
            ...tasks,
            task
        ]);

        setTaskContent("");
        nextId.current += 1;
    }

    return (
        <div className="flex flex-col">
            <div className="text-2xl flex-1">
                <p>{setGreetingStr()}, {username}</p>
                <p>You've got</p>
                <p className="text-5xl">{numOfTask}/{totalTasks}</p>
                <p>task Today!</p>
                <InputBox value={taskContent} placeHolder="input your task" onChangeFunc={onChangeFunc} onClickFunc={onClickFunc} />
            </div>
            <div className={[
                totalTasks === 0 ? "bg-[url('./assets/illust_empty.svg')]":"bg-blue-500",
                "h-[400px]",
                "bg-cover"
                ].join(" ")}>
                <TaskList tasks={tasks} />
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
