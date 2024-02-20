import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import './styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  onAddTodo(name) {
    const newTodo = {
      id: crypto.randomUUID(),
      name,
      complete: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  }

  onTodoComplete({ id, complete }) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete };
        }

        return todo;
      }),
    }));
  }

  render() {
    const { todos } = this.state;

    return (
      <main>
        <TodoInput onAddTodo={(name) => this.onAddTodo(name)} />
        <TodoList todos={todos} onCheck={(payload) => this.onTodoComplete(payload)} />
      </main>
    );
  }
}

export default App;
