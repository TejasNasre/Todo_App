import React, { useEffect } from "react";
import { useState } from "react";
import TodoCard from "./TodoCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export let toUpdateArray = [];

export default function Todo() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({ title: "", description: "" });
  const [todoArray, setTodoArray] = useState([]);
  const id = sessionStorage.getItem("id");

  const showDes = () => {
    setShow(!show);
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const deleteTodo = async (cardId) => {
    // console.log(id);
    if (id) {
      await axios
        .delete(`https://todo-app-h06k.onrender.com/api/v2/delete-task/${cardId}`, {
          data: { id: id },
        })
        .then((res) => {
          toast.success("🦄 Todo Deleted Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
      // todoArray.splice(id, "1");
      // setTodoArray([...todoArray]);
    } else {
      toast.error("🦄 Please Sign In To Delete The Task");
    }
  };

  const submit = async () => {
    if (input.title === "" && input.description === "") {
      toast.error("🦄 Please Fill All The Fields");
    } else {
      if (id) {
        await axios
          .post("https://todo-app-h06k.onrender.com/api/v2/add-task", {
            title: input.title,
            description: input.description,
            id: id,
          })
          .then((res) => {
            // console.log(res.data);
            toast.success("🦄 Todo Added Successfully");
          })
          .catch((err) => {
            console.log(err);
          });
        setInput({ title: "", description: "" });
        // console.log(todoArray);
      } else {
        setTodoArray([...todoArray, input]);
        setInput({ title: "", description: "" });
        // console.log(todoArray);
        toast.success("🦄 Todo Added Successfully");
        toast.error(
          "Task Is Added But Not Saved Please Sign In To Save The Task"
        );
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await axios
          .get(`https://todo-app-h06k.onrender.com/api/v2/get-all-task/${id}`)
          .then((res) => {
            // console.log(res);
            setTodoArray(res.data.list);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    fetchData();
  }, [submit]);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center p-10 bg-[#111827] text-white">
        <div className="shadow-2xl p-6 border dark:rounded-lg flex flex-col items-center justify-center h-2/3 gap-5 min-w-full ">
          <div className="space-y-2">
            <h2 className="text-lg font-medium leading-none">My Todo</h2>
            <p className="text-sm text-white dark:text-gray-400">
              Enter the title and description of your Todo.
            </p>
          </div>
          <ToastContainer />
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-0">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow-xl flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-100 text-[#111827]"
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
                  : `shadow-xl flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] bg-slate-100 text-[#111827]`
              }
              id="description"
              placeholder="Description"
              onChange={change}
              name="description"
              value={input.description}
            ></textarea>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-slate-100 text-[#111827]"
            onClick={submit}
          >
            Add Todo
          </button>
        </div>
      </div>
      <div className="h-auto w-full p-10 flex flex-col items-center justify-center bg-[#111827] text-white border-slate-100">
        <h1 className="text-2xl">Your Todo</h1>
        <div className="h-auto w-full flex flex-row flex-wrap items-start justify-start gap-8 border-slate-100">
          {todoArray && todoArray.length > 0
            ? todoArray.map((item, index) => (
                <TodoCard
                  title={item.title}
                  description={item.description}
                  key={index}
                  id={item._id}
                  deleteId={deleteTodo}
                  updateId={item._id}
                  toBeUpdate={() => {
                    toUpdateArray = todoArray[index];
                  }}
                />
              ))
            : `Please Add Some Todos`}
        </div>
      </div>
    </>
  );
}
