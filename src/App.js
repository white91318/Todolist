import React, { Component } from "react";
import 'react-dom';
import logo from './logo.svg';
import './App.scss';
import Card from './Card'
import AddItem from './AddItem';
import { render } from "@testing-library/react";
import addIcon from './add.png';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        todoItems:[
          { id: 1, data: "TODO 1" },
          { id: 2, data: "TODO 2" }],
        ProgressItems: [
          { id: 1, data: "Progress 1" },
          { id: 2, data: "Progress 2" }],
        DoneItems:[
          { id: 1, data: "Done 1" },
          { id: 2, data: "Done 2" }],
    }
}

  handleAddTodoItem=(todoText)=>{
    console.log("todoText",todoText)
    var items = this.state.todoItems;
    items.push({
        id: items.length + 1,
        data: todoText
    });
    this.setState({todoItems: items});
    console.log("todoItems!",this.state.todoItems);
  }
  showAddForm = () =>{
    var add = document.getElementById("add-form");
    add.style.visibility = "visible";
  }    
  render(){
    console.log(this.state)
  return (
      <body style={{ backgroundColor:"#D1E9E9", height: "100vh"}} >
        <div className="row" style={{width:"90%",textAlign:"center",margin:"0 auto"}}>
          <Card title="todo" display={this.state.todoItems}></Card>
          <Card title="progress" display={this.state.ProgressItems}></Card>
          <Card title="done" display={this.state.DoneItems}></Card>
        </div>
        <img src={addIcon} className="add-item" onClick={this.showAddForm}></img> 
        <div className="add-form" id="add-form">
          <AddItem add={this.handleAddTodoItem}></AddItem>    
        </div>
      </body>

    );    
  }
  
}

export default App;
