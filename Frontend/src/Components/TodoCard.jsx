import React from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

export default function TodoCard({ title, description, id , deleteId}) {
  return (
    <>
      <div className="p-8 h-auto w-auto shadow-xl mr-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex flex-row mt-5">
          <div className="flex flex-row cursor-pointer">
            <GrDocumentUpdate className="text-xl text-blue-700 mr-1" />
            Update
          </div>
          <div
            className="ml-4 text-l flex flex-row cursor-pointer"
            onClick={() => {
              deleteId(id);
            }}
          >
            <AiFillDelete className="text-xl text-red-700 mr-1" />
            Delete
          </div>
        </div>
      </div>
    </>
  );
}
