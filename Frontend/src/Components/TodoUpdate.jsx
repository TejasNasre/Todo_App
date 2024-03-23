import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toUpdateArray } from "./Todo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function TodoUpdate() {
  const navigate = useNavigate();
  // console.log(toUpdateArray)
  const { updateId } = useParams();
  // console.log(updateId)

  useEffect(() => {
    setInput({
      title: toUpdateArray.title,
      description: toUpdateArray.description,
    });
  }, [updateId]);

  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async () => {
    // console.log(input);
    await axios
      .put(`http://localhost:3000/api/v2/update-task/${updateId}`, input)
      .then((res) => {
        // console.log(res);
        toast.success("🦄 Todo Updated Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("🦄 Please Sign In To Update The Task");
      });
    navigate("/add-todo");
  };
  return (
    <>
      <div className="h-full w-full flex items-center justify-center p-10 bg-[#111827] text-white">
        <div
          className="h-[500px] rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg bg-[#111827] text-white"
          data-v0-t="card"
        >
          <ToastContainer />
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold whitespace-nowrap tracking-tight text-xl">
              Update Task
            </h3>
            <p className="text-sm text-muted-foreground">
              Update the title and description of your task.
            </p>
          </div>
          <div className="p-6 grid gap-4">
            <div className="grid w-full gap-1.5">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="title-3"
              >
                Title
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-100 text-[#111827]"
                id="title-3"
                placeholder="Title"
                value={input.title}
                name="title"
                onChange={change}
              />
            </div>
            <div className="grid w-full gap-1.5">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="description-3"
              >
                Description
              </label>
              <textarea
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] bg-slate-100 text-[#111827]"
                id="description-3"
                placeholder="Description"
                value={input.description}
                name="description"
                onChange={change}
              ></textarea>
            </div>
          </div>
          <div className="items-center p-6 flex gap-10">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-slate-100 text-[#111827]"
              onClick={submit}
            >
              Update
            </button>
            <div>
              <Link to="/add-todo">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-slate-100 text-[#111827]">
                  Close
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
