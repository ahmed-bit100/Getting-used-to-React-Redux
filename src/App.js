import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {UP} from './actions/actions'

function App(props) {
  return (
    <div className="App">
    <button onClick={props.Increment}>+</button>
    <input type='text' placeholder="0" value={props.c} onChange={(e)=>props.handleInput(e.target.value)} />
    <button onClick={props.Decrement}>-</button>
    </div>
  );
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInput:(a)=>dispatch({type:'INP',payload:a}),
        Increment:()=>dispatch(UP()),
        Decrement:()=>dispatch({type:'DECREMENT'})
    }
}
const mapStateToProps=(state)=>{
  return{
    c:state.count,
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (App);
