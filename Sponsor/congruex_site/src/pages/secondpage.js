import React from 'react'
import { UseComponentVisible } from '../hooks'
import { TodoApp, Counter, Widget_Container } from '../widgets'

export default function secondpage() {
  return (
    <div className='App'>
      <UseComponentVisible id='homepage-todo' children={<Widget_Container name='Todo List' children={<TodoApp />} />} />
      <Widget_Container name='Click Counter'>
        <Counter counter_id="counter_1"/>
        <Counter counter_id="counter_2"/>
      </Widget_Container>
      
    </div>
  )
}
