import React from 'react'
import { TodoApp, Counter } from '../widgets'

export default function secondpage() {
  return (
    <div className='App'>
        <h1 style={{color: "white"}}>Say something</h1>
        <div className='widget_container'>
          <Counter counter_id="counter_1"/>
          <Counter counter_id="counter_2"/>
        </div>
        <div className='widget_container'>
          <TodoApp />
        </div>
    </div>
  )
}
