import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TodoUpdate() {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center p-10">
        <div
          class="h-[500px] rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg bg-slate-100"
          data-v0-t="card"
        >
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="font-semibold whitespace-nowrap tracking-tight text-xl">
              Update Task
            </h3>
            <p class="text-sm text-muted-foreground">
              Update the title and description of your task.
            </p>
          </div>
          <div class="p-6 grid gap-4">
            <div class="grid w-full gap-1.5">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="title-3"
              >
                Title
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="title-3"
                placeholder="Title"
              />
            </div>
            <div class="grid w-full gap-1.5">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="description-3"
              >
                Description
              </label>
              <textarea
                class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                id="description-3"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div class="items-center p-6 flex gap-10">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-slate-900 text-white">
              Update
            </button>
            <div>
            <Link to="/add-todo">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-slate-900 text-white">
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
