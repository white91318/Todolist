import React, { Component } from "react";
import 'react-dom';
import logo from './logo.svg';
import './App.scss';
import { render } from '@testing-library/react';
import { Draggable } from 'react-beautiful-dnd';

class Item extends Component{
    onDelete = (e) => {
        console.log(e.target.id)
        let dataToDel = []
        dataToDel.push(e.target.id)
        dataToDel.push(this.props.status)
        console.log("dataToDel",dataToDel)
        this.props.getIndex(dataToDel);
    }
    
    render(){
        console.log("ID",this.props.id)
    return(
        <Draggable key={this.props.id} draggableId={String(this.props.id)} index={this.props.id}>
            {p => (
                <div>
                    <p className="item" ref={p.innerRef}
                    {...p.draggableProps}
                    {...p.dragHandleProps}>
                        {this.props.item}
                        <span id={this.props.id} className='del-button' onClick={this.onDelete}>刪除</span>
                    </p>
                </div>
            )}
            
        </Draggable>
        

                    
                    
    )
    }
  }


export default Item;