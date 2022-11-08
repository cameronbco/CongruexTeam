import React from 'react'
import '../App.css';
import { Clock, DropdownMenu, Test, Widget_Container } from '../widgets';

export default function homepage() {
  return (
    <div className='App'>
      <div className='gradient__text'>
        <Clock/>
      </div>
      
      <Widget_Container name='Links' children={<DropdownMenu />} />
      <Widget_Container name='Test' children={<Test />} />
    </div>
  )
}
