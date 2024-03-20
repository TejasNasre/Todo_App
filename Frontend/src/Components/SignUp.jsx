import React from "react";

export default function SignUp() {
  const [input,setInput] = [{email : "", password : ""}]
  const change = (e) => {
  const {name,value}  = e.target;
  setInput({...input,[name]:value})
  }
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm mx-auto"
          data-v0-t="card"
        >
          <div class="flex flex-col p-6 space-y-2">
            <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
              Sign Up to your account
            </h3>
            <p class="text-sm text-muted-foreground">
              Enter your email and password to access your tasks.
            </p>
          </div>
          <div class="p-6 space-y-4">
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Email
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="m@example.com"
                type="email"
                onClick={change}
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
              >
                Password
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                type="password"
                placeholder="Enter your password"
                onClick={change}
              />
            </div>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-slate-900 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
