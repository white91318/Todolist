import React, { Component } from "react";
import 'react-dom';
import logo from './logo.svg';
import './App.scss';
import addIcon from './add.png';
import { render } from '@testing-library/react';
import xIcon from './x-symbol.png'

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
    close =()=>{
        document.getElementById("add-form").style.visibility = "hidden";
    }
    render(){
        return(
        <div>
            <div className="add-title">新增代辦事項</div>
            <input type="text" 
                className="add-input-box"
                value={this.state.todoText} 
                    onChange={this.handleTodoChange}/>
                <button
                    className="add-btn"
                    onClick={this.handleAddTodoItem}>新增</button>
            <img src={xIcon} className="add-close-btn" onClick={this.close}/>        
        </div>

                    
                    
    )
    }
  }


export default AddItem;