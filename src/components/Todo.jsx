import React from 'react';
import { FaDeleteLeft } from "react-icons/fa6";


const Todo = ({text, remove,ind}) => {
  return (
    <>
        <div className="flex transition-all duration-200 w-full h-auto p-3 justify-between items-center bg-slate-500 rounded-md text-white font-semibold mb-2">
            <p>{text}</p>
            <FaDeleteLeft onClick={() => remove(ind)} cursor={'pointer'} size={20} />

        </div>
    </>
  );
}

export default Todo;
