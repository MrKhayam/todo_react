import React, { useState } from 'react';
import Todo from './Todo';
import Error from './Error';
import Error1 from './Error1';

const Input = () => {

  const [todo, setTodo] = useState('');
  const [storeTodo, setStoreTodo] = useState([]);  
  const [chk, setChk] = useState(false)
  const [chk1, setChk1] = useState(false)
  const [chk2, setChk2] = useState(false)


    const handleClick = (e) => {  
      e.preventDefault();
      if(todo) {
        setStoreTodo([...storeTodo, todo]);
        setChk(false)
      }else{
        setChk(true)
        if(storeTodo.length < 1) setChk1(true)
          else setChk1(false)
      }
      setTodo('');
      }

      const handleRemove = (ind) => {
        const newData = storeTodo.filter((txt,index) => {
          return (
            index != ind
          );
        }) 
        setStoreTodo(newData);
      }
      
  return (
    <>
      <div className="w-[70%] transition-all duration-200 h-auto  flex justify-center items-center p-3 m-auto">
        <form className='flex gap-5'>
            <input
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
             className={` ${chk ? 'ring-2 ring-offset-4 ring-red-600' : null} outline-none w-[600px] h-[50px] rounded-full p-5 focus:ring-2 bg-black ring-offset-4 ring-offset-zinc-900 transition-all duration-200 text-white text-md font-semibold`}  type="text" />
            
            <button onClick={(e)=>handleClick(e)} className='bg-blue-600  px-12 rounded-full text-white font-semibold hover:scale-95 transition-all duration-150'>Add</button>
        </form>
      </div>
      <div className="w-[55%] mt-12 h-auto p-3 m-auto">
        {
          storeTodo.length < 1 && <Error1 />
        }
        {
          chk && chk1 ? <Error /> : (
            storeTodo.map((item,index) => {
              return (
                <Todo text={item} ind={index} key={index} remove={handleRemove} />
              )
            }
          )
          )
            }
      
      </div>
    </>
  );
}

export default Input;
