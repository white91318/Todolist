import React, { Component } from "react";
import 'react-dom';
import logo from './logo.svg';
import './App.scss';
import { render } from '@testing-library/react';
import Item from './Item'
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

class Card extends Component{
    getIndex =(data) =>{
        console.log("FromChild",data)
        this.props.getIndex(data)
    }
    render(){

    
    return(
        <Droppable droppableId={this.props.status}>
        {
            (provided,snapshot) => (
                <div ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ backgroundColor: snapshot.isDraggingOver ? 'green' : 'white' }}
                {...provided.droppableProps}>
                
                    <div className={`card ${this.props.title}`} >
                        <div className='card-title' >{this.props.title}</div>
                        <div className='card-body'>
                        {this.props.display.map(x=>{
                            return <Item 
                            id={x.id} 
                            item={x.data} 
                            status={this.props.status} 
                            getIndex={this.getIndex}
                            ></Item>
                            })
                        }
                        </div> 
                    </div>  
                    {provided.placeholder}  
                </div>
            )
        }
        </Droppable>
                
    )
    }
  }


export default Card;