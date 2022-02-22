import React, { useRef } from 'react'
import './style.css';

interface Props {
  todo : string,
  setTodo : React.Dispatch<React.SetStateAction<string>>,
  handleAdd : (e : React.FormEvent) => void,
}

const InputField = ({todo, setTodo, handleAdd} : Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
   
  return (
   <form className='input' onSubmit={(e) => handleAdd(e)}>
        <input 
        className='input_type' 
        ref={inputRef}
        type="input" 
        placeholder='Enter the Task'
        value={todo}
        onChange={ (e) => setTodo(e.target.value) }
        ></input>
        <button className="input_submit" type='submit'>Go</button>
   </form>
  )
}

export default InputField