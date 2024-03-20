import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="flex flex-col items-center justify-center h-screen py-6 space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Your tasks, beautifully simple
              </h1>
              <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                The only task manager you'll ever need. It's simple, fast, and
                easy to use. Get more done with less effort.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                to='/sign-in'
                rel="ugc"
              >
                Sign In
              </Link>
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
                rel="ugc"
              >
                Learn more
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
