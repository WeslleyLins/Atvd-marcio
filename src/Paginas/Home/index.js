import react from "react";
import TodoProvider from "../../contexts/TodoContex";
import TodoList from "../../Components/TodoList"
import AddTodo from "../../Components/AddTodo"


function Home () {

  return (
  <div>
  <TodoProvider>
    <h1>Os Melhores</h1>
       <TodoList></TodoList>
       <br/>
      <hr/>
      <br/>
       <AddTodo></AddTodo>
   </TodoProvider>
   </div>
  );
}

export default Home;

