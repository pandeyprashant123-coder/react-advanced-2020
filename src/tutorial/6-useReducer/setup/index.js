import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state,action) => {
  if(action.type==='ADD_ITEM'){
    return{
      ...state,
      people:data,
      isModelOpen:true,
      modelContent:'item added',
    }
  }
  throw new Error('no matching item');
}
const defaultState={
  people:[],
  isModelOpen:false,
  modelContent:''
}
const Index = () => {
  const [name, setName] = useState('');
  const [state,dispatch] = useReducer(reducer,defaultState)
  const handleSubmit=(e)=>{ 
    e.preventDefault();
    if (name) {
      dispatch({type:'ADD_ITEM'})
    }else{
      dispatch({type:'TESTING'})
    }
  }
  return (
  <>
    {state.isModelOpen && <Modal modelContent = {state.modelContent}/>}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e)=>setName(e.target.value)} 
        />
      </div>
      <button type='submit' className='btn'>add</button>
    </form>
    {state.people.map((person)=>{
      return(
        <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      )
    })}
  </>
    )
};

export default Index;
