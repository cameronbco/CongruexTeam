import React from 'react'
import '../App.css';
import { Clock, DropdownMenu, Test } from '../widgets';

export default function homepage() {
  return (
    <div className='App'>
      <div className='gradient__text'>
        <Clock/>
      </div>
      <div className='widget_container'>
        <DropdownMenu /> 
      </div>
      <div className='widget_container'>
        <Test />
      </div>
    </div>
  )
}
