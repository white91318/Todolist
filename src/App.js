import React, { Component } from "react";
import 'react-dom';
import logo from './logo.svg';
import './App.scss';
import Card from './Card'
import AddItem from './AddItem';
import { render } from "@testing-library/react";
import addIcon from './add.png';
import { get } from "https";
import { DragDropContext } from 'react-beautiful-dnd';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items:[
          { id: 1, data: "申請電話費" ,status: "TODO"},
          { id: 2, data: "人事費" ,status: "TODO"},
          { id: 3, data: "幫老師請假" ,status: "TODO"},
          { id: 5, data: "TODO 2" ,status: "Progress"},
          { id: 1, data: "TODO 1" ,status: "TODO"},
          { id: 2, data: "TODO 2" ,status: "DONE"}],
    }
    this.renewID()
}
  renewID = () =>{
    this.state.items.forEach((element,i) => {
      element.id = i
    });
  }
  
  handleAddTodoItem=(todoText)=>{
    var items = this.state.items;
    
    items.push({
        id: items.length + 1,
        data: todoText,
        status: "TODO",

    });
    this.setState({items: items});
    
  }
  showAddForm = () =>{
    var add = document.getElementById("add-form")
    var listView = document.getElementById("card")
    add.style.visibility = "visible"
    listView.style.filter ="blur(3px)"
    
  }    
  divide = (s) => {
    let getItem = this.state.items.filter((i,index)=>{

        return i.status == s
    })
    return getItem
  } 
  getIndex =(data) =>{
    const {items} = this.state;
    if (items[data[0]].status == data[1] ){
      items.splice(data[0],1)
    }
    this.setState({items})
    this.renewID()
  }
  onDragEnd = result => {
    let {items} = this.state
    console.log("ALL",items)
    console.log(result.source.index)
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    items.forEach(e=>{
      if(e.id == source.index){
        e.status = destination.droppableId
      }
    })
    this.setState({
      items : items
    })
  };

  render(){
  return (
    <DragDropContext onDragEnd={this.onDragEnd} >
      <body style={{ backgroundColor:"#D1E9E9", height: "100vh"}} >
        <div className="row" id="card" style={{width:"90%",textAlign:"center",margin:"0 auto"}}>
          <Card title="todo" display={this.divide("TODO")} status="TODO" getIndex={this.getIndex}></Card>
          <Card title="progress" display={this.divide("Progress")} status="Progress" getIndex={this.getIndex}></Card>
          <Card title="done" display={this.divide("DONE")}  status="DONE" getIndex={this.getIndex}></Card>
        </div>
        <img src={addIcon} className="add-item" onClick={this.showAddForm}></img> 
        <div className="add-form" id="add-form">
          <AddItem add={this.handleAddTodoItem}></AddItem>    
        </div>
      </body>
    </DragDropContext>
    );    
  }
  
}

export default App;
