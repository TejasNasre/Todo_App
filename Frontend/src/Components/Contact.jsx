import React from "react";

export default function Contact() {
  return (
    <>
      <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div class="space-y-3">
            <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Experience the workflow the best frontend teams love.
            </h2>
            <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing
              infrastructure with automated CI/CD.
            </p>
          </div>
          <div class="mx-auto w-full max-w-sm space-y-2">
            <form class="flex space-x-2">
              <input
                type="email"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                placeholder="Enter your email"
              />
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <a class="underline underline-offset-2" href="#" rel="ugc">
                Terms &amp; Conditions
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
