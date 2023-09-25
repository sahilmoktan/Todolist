"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}])
    setTitle("")
    setDesc("")

  };
  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
        <ul>
        <div className="flex justify-between mb-5">
          <h5 className="text-xl font-semibold">{t.title} </h5>
          <h6 className="text-xl font-semibold">{t.desc} </h6>
        </div>
  
        </ul>
      )
    })
  }

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
        <hr/>
        <div className="p-8 bg-slate-300">{renderTask}</div>
      </div>
    </>
  );
};

export default page;
