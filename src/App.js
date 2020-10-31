import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component {
  state = {
    todos : [
    {id: 1, content: "lets paly cricket"},
    {id: 2, content: "lets paly foootball"},
    {id: 3, content: "did you want to paly cricket"}
    ]
  }
deleteTodo = (id)=>{
  const todos = this.state.todos.filter(todo =>{
    return todo.id !== id;
  })
  this.setState({
    todos
  })
}
AddTodo = (todo)=>{
todo.id = Math.random()
const todos = [...this.state.todos,todo]
console.log('fdfdfd',todos)
this.setState({
  todos : todos
});
this.setState({
  Content :''
})
}

render(){
  console.log("todos array",this.state.todos);
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todos App );</h1>
      <Todos todos = {this.state.todos}  deleteTodo={ this.deleteTodo }/>
      <AddTodo AddTodo = {this.AddTodo }/>
    </div>
  );
}
}

export default App;
