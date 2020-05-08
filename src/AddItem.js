import React, { Component } from "react";
import 'react-dom';
import logo from './logo.svg';
import './App.scss';
import addIcon from './add.png';
import { render } from '@testing-library/react';

class AddItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todoText:"",
        }
    }
    getInitialState=()=>{
        return {todoText: ""};  
    }
    handleTodoChange = (e)=>{
        this.setState({todoText: e.target.value});        
    }
    handleAddTodoItem=(e)=>{
        this.props.add(this.state.todoText);
        // 如何將資料新增到TodoItems中?  
    }
    render(){
        return(
        <div>
            {/* <img className="add-item" src={addIcon} onClick={this.add}></img> */}
            <input type="text" 
                
                value={this.state.todoText} 
                    onChange={this.handleTodoChange}/>
                <button
                    onClick={this.handleAddTodoItem}>Add Todo Item</button>
        </div>

                    
                    
    )
    }
  }


export default AddItem;