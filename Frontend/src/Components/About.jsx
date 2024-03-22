import React from "react";

export default function About() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Make collaboration seamless with built-in code review tools.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Automation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Automate your workflow with continuous integration.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Scale</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Deploy to the cloud with a single click and scale with ease.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
