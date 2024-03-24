import axios from "axios";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index.js";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://todo-app-h06k.onrender.com/api/v1/login", input)
      .then((res) => {
        sessionStorage.setItem("id", res.data.others._id);
        dispatch(authActions.login());
        if (res.data.message === "Please Register First") {
          toast.error(res.data.message);
        } else if (res.data.message === "Invalid Password") {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate("/add-todo");
          setInput({ email: "", password: "" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-[#111827] text-white">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm mx-auto"
          data-v0-t="card"
        >
          <ToastContainer />
          <div className="flex flex-col p-6 space-y-2">
            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
              Sign In to your account
            </h3>
            <p className="text-sm text-muted-foreground">
              Enter your email and password to access your todo.
            </p>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-100 text-[#111827]"
                id="email"
                placeholder="m@example.com"
                type="email"
                name="email"
                onChange={change}
                value={input.email}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-100 text-[#111827]"
                id="password"
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={change}
                value={input.password}
              />
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-slate-100 text-[#111827]"
              onClick={submit}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
