import React, { Component } from "react";
import 'react-dom';
import logo from './logo.svg';
import './App.scss';
import { render } from '@testing-library/react';
import Item from './Item'

class Card extends Component{
    render(){
    let display = this.props.display.map((x)=>{
       return <Item id={x} item={x.data}></Item>
    })
    
    
    return(
        <div>
            <div className={`card ${this.props.title}`} >
                <div className='card-title' >{this.props.title}</div>
                <div className='card-body'>
                    {display}
                </div> 
            </div>
        </div>        
    )
    }
  }


export default Card;