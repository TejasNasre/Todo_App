import React from "react";

export default function TodoCard({ title, description }) {
  return (
    <>
        <div className="p-4 h-auto w-auto shadow-xl">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      
    </>
  );
}
