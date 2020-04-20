import React from 'react';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import TodoList from './components/ToDoList/dolist';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">

        <h1>Basic todo App </h1>
        <h2>Using Redux-React-typescript</h2>
      </div>
      <TodoList />
    </Provider>
  );
}

export default App;