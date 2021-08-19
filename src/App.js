import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import { Footer } from './MyComponents/Footer';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am Delete of todo",todo); 
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    })); 
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo",title,desc)
    let sno;
    if(todos.length===0){
      sno = 0;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }


// setTodos :- function which will update the todos

  const [todos, setTodos] = useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    // <div className="App">
    // <h1>hello moto</h1>
    // <div>{12+90}</div>
    // </div>

    <>
    <Router>
      <Header title={"My Todos List"} searchBar={false} />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </> )
          }} >
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

      {/*<AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />*/}

      <Footer />
    </Router>  
    </>

  );
}
export default App;
