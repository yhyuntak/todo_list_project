import InputBox from "../components/InputBox";
import {useRef, useState} from "react";
import TaskList from "../components/TaskList";

const Home = () => {
    const numOfTask = 0;
    const totalTasks = 0;

    const [taskContent, setTaskContent] = useState("");
    const onChangeFunc = (e) => {
        setTaskContent(e.target.value);
    }

    const nextId = useRef(4);

    const [tasks,setTasks]  = useState([
        {
            id: 1,
            content: "hello"
        },
        {
            id: 2,
            content: "hello 2"
        },
        {
            id: 3,
            content: "hello 3"
        },
    ])

    const onClickFunc = () => {
        const task = {
            id: nextId.current,
            content: taskContent
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
                <p>Good afternoon, hyuntak</p>
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


export default Home;
