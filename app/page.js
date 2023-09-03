"use client"
// import React, { useState } from 'react'

const page = () => {
  // const [title, settitle] = useState("")
  return (
<>
<h1 className='text-white text-center text-4xl p-5 font-bold bg-orange-600'>Sahil Todo list</h1>

<div className="justify-items-center">

<form>
<input type="text" className='text-xl border-black border-2 rounded-md m-5 p-1' placeholder='Your Task' />

<input type="text" className='text-xl border-black border-2 rounded-md m-5 p-1' placeholder=' Task Discription' />

<button className='bg-orange-600 font-bold text-white p-2 rounded-md'>Add Task</button>

</form>
</div>
</>
    )
}

export default page