import React, { Component } from 'react';
import Footer from './containers/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{padding: '20px'}}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
