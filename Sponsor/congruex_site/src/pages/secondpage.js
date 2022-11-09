import React from 'react'
import { TodoApp, Counter, Widget_Container } from '../widgets'

export default function secondpage() {
  return (
    <div className='App'>
      <Widget_Container name='Click Counter'>
        <Counter counter_id="counter_1"/>
        <Counter counter_id="counter_2"/>
      </Widget_Container>
      <Widget_Container name='Todo List' children={<TodoApp />} />
    </div>
  )
}
