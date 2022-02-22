import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import TodoList from './components/todoList';
import { Todo } from './model';

// let name: string;
// let age : number | string; // union using union we define both the type
// let listofAges: string[];  // ["1", "2", "3"]
// let listOfAges: number[];  // [1,2,3,4];
// let isStudent : boolean[]; 
// let listStudent : [number, string] // in the tuple declaration we must provide oth stirng and integarer else it will throught an error 

// // how do we define the function type 


// // this how we define the object in tyescript. 
// type Person = {
//   name : string,
//   age? : number
// } 

// let person : Person = {
//   name : "Ramesh",
// };

// instead of React.FC we can provide the React.ReactNode 
const App : React.FC = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e : React.FormEvent) => {
   
   e.preventDefault();

   if(todo) {
       setTodos([...todos, {id: Date.now(), todo : todo, isDone: false}]);
       setTodo("");
   }
  }
  console.log(todos);
  return (
    <div className="App">
        <span className="heading">Task World</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
