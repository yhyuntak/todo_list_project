import InputBox from "../components/InputBox";

const Home = () => {
    const numOfTask = 0;
    const totalTasks = 0;

    return (
        <div className="flex flex-col">
            <div className="text-2xl flex-1">
                <p>Good afternoon, hyuntak</p>
                <p>You've got</p>
                <p className="text-5xl">{numOfTask}/{totalTasks}</p>
                <p>task Today!</p>
                <InputBox placeHolder="input your task" />
            </div>
            <div className={[
                totalTasks === 0 ? "bg-[url('./assets/illust_empty.svg')]":"bg-blue-500",
                "h-[400px]",
                "bg-cover"
                ].join(" ")}>

            </div>
        </div>

    );
}


export default Home;
