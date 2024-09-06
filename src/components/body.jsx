import React, {useState, useEffect} from 'react'
import Del from "../assets/delete.png";
import Mark from "../assets/check-mark.png";
import { v4 as uuidv4 } from 'uuid';

const body = () => {
    const [task, settask] = useState("");
    const [allTask, setallTask] = useState([]);

    const add =() => {
        setallTask([...allTask,{ id: uuidv4() ,task, isDone: false}])
        settask("");
    }
    const handleChange =(e) => {
        settask(e.target.value)
    }
    const handleCheck =(e) => {
        let a = e.target.name;
        let index = allTask.findIndex((e) => {
            return e.id === a;            
        })
        let newallTask = [...allTask];
        newallTask[index].isDone = !newallTask[index].isDone;
        setallTask(newallTask);
    }

    const handleDel = (e, id) => {
        let newallTask = allTask.filter((item) => {
            return item.id!==id
        })
        setallTask(newallTask);
    }


  return (
    <div className='bg-slate-500 w-full h-full  flex items-center justify-center flex-col gap-4 '>
        {/* adding  */}
        <div className="top flex justify-center p-4 gap-4    rounded-lg">
            <input type="text" onChange={handleChange} value={task} className='font-semibold text-xl bg-slate-400 p-3 rounded-lg min-w-full '/>
            <button onClick={add} className="Add p-3  bg-slate-400 rounded-lg font-medium text-xl">Add</button>
        </div>

        {/* list of tasks  */}
        <div className="list w-fit ">
        
        {/* lines */}
        {allTask.map((item) => {
            return <div key={item.id} className="line flex gap-4 bg-slate-400 px-1 py-1 m-2 w-full rounded-lg">
            <button onClick={handleCheck}  ><img name={item.id} className='w-8 h-6' src={Mark} alt="" /> </button>
            <p className={item.isDone?"line-through":""}  >{item.task}</p>
            <button onClick={(e) => {handleDel(e, item.id)}} className=' rounded-xl'><img name={item.id} className='w-10 h-8' src={Del} alt="" /></button>
        </div>  
        })}
        </div>

    </div>
  )
}

export default body