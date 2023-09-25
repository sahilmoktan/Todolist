"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(desc)
    setTitle("")
    setDesc("")

  };

  return (
    <>
      <h1 className="text-white text-center text-4xl p-5 font-bold bg-orange-600">
        Sahil Todo list
      </h1>

      <div className="justify-items-center">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="text-xl border-black border-2 rounded-md m-5 p-1"
            placeholder="Your Task"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input
            type="text"
            className="text-xl border-black border-2 rounded-md m-5 p-1"
            placeholder=" Task Discription"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />

          <button className="bg-orange-600 font-bold text-white p-2 rounded-md m-5">
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
