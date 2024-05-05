import InputBox from "../components/InputBox";
import {useState} from "react";
import Task from "../components/Task";

const Home = () => {
    const numOfTask = 0;
    const totalTasks = 0;

    const dummyTasks = [
        {
            context: "hello"
        },
        {
            context: "hello 2"
        },
        {
            context: "hello 3"
        },
    ]


    return (
        <div className="flex flex-col">
            <div className="text-2xl flex-1">
                <p>Good afternoon, hyuntak</p>
                <p>You've got</p>
                <p className="text-5xl">{numOfTask}/{totalTasks}</p>
                <p>task Today!</p>
                <InputBox placeHolder="input your task"  />
            </div>
            <div className={[
                totalTasks === 0 ? "bg-[url('./assets/illust_empty.svg')]":"bg-blue-500",
                "h-[400px]",
                "bg-cover"
                ].join(" ")}>
                {dummyTasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </div>
        </div>

    );
}


export default Home;
