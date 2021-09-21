import React, {Fragment} from 'react';
import './App.css';
import Todo from './todo'
import TodoForm from './form'
function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (
    <Fragment>
          <h2>To Do List</h2>
          <div className="app">
            <div className="todo-list" >
              {todos.map((todo, i) => (
                <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
              ))}
              <TodoForm addTodo={addTodo} />
            </div>
          </div>
    </Fragment>
  );
}
export default App;
