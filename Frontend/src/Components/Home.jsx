import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
   <>
   <section className="bg-gray-900 text-white h-[100vh]">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Simplify Your Life,

        <span className="sm:block"> Achieve More: Welcome to TodoZen </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      Welcome to TodoZen, your ultimate companion for mastering task management and reclaiming your productivity. Life is full of tasks, but with TodoZen, navigating through them seamlessly becomes a breeze.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          to="/sign-up"
        >
          Sign Up
        </Link>

        <Link
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          to="/sign-in"
        >
          Sign In
        </Link>
      </div>
    </div>
  </div>
</section>
   </>
  );
}
