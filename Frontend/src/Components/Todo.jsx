import React from "react";
import { useState } from "react";
import TodoCard from "./TodoCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoUpdate from "./TodoUpdate";

export default function Todo() {
  const [show, setShow] = useState(false);

  const showDes = () => {
    setShow(!show);
  };

  const [input, setInput] = useState({ title: "", description: "" });

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const [todoArray, setTodoArray] = useState([]);

  const submit = () => {
    if (input.title === "" && input.description === "") {
      toast.error("🦄 Please Fill All The Fields");
    } else {
      setTodoArray([...todoArray, input]);
      setInput({ title: "", description: "" });
      // console.log(todoArray);
      toast.success("🦄 Todo Added Successfully");
      toast.error(
        "Task Is Added But Not Saved Please Sign In To Save The Task"
      );
    }
  };
  return (
    <>
      <div className="relative flex flex-col items-center justify-center p-10 ">
        <div className="shadow-2xl p-6 border dark:rounded-lg flex flex-col items-center justify-center h-2/3 gap-10 min-w-full ">
          <div className="space-y-2">
            <h2 className="text-lg font-medium leading-none">My Task</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter the title and description of your task.
            </p>
          </div>
          <ToastContainer />
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow-xl flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="title"
              placeholder="Title"
              onClick={showDes}
              onChange={change}
              name="title"
              value={input.title}
            />
            <label
              className={
                show == false
                  ? `hidden`
                  : `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`
              }
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className={
                show == false
                  ? `hidden`
                  : `shadow-xl flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]`
              }
              id="description"
              placeholder="Description"
              onChange={change}
              name="description"
              value={input.description}
            ></textarea>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-slate-900 text-white"
            onClick={submit}
          >
            Add Todo
          </button>
        </div>
      </div>
      <div className="h-auto w-full p-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl">Your Task</h1>
        <div className="h-auto w-full flex flex-row flex-wrap items-start justify-start">
          {todoArray.length > 0
            ? todoArray.map((item, index) => (
                <TodoCard
                  title={item.title}
                  description={item.description}
                  key={index}
                  id={index}
                  deleteId={(id) => {
                    // console.log(id)
                    todoArray.splice(id, "1");
                    setTodoArray([...todoArray]);
                  }}
                />
              ))
            : `Please Add Some Todos`}
        </div>
      </div>
      <div className="w-full absolute top-[100px] left-0 flex flex-col items-center justify-center">
        <TodoUpdate/>
      </div>
    </>
  );
}
