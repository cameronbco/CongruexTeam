import React from 'react'
import '../App.css';
import { ComponentVisibilityModal } from '../components';
import { UseComponentVisible } from '../hooks';
import { Clock, DropdownMenu, Test, TodoApp, TodoDropdown, Widget_Container } from '../widgets';

export default function Homepage() {

  return (
    <div className='App w-full'>
      <div className='gradient__text font-bold text-2xl p-1'>
        <Clock/>
      </div>
      <Widget_Container name="Demo">
        <div>
          All the components are hidden by default, try turning them on by clicking "customize page"
        </div>
      </Widget_Container>
      <ComponentVisibilityModal />
      
      <UseComponentVisible id='link-view'>
        <Widget_Container name='Links' children={<DropdownMenu />} />
      </UseComponentVisible>

      <UseComponentVisible id='test-view' children={<Widget_Container name='Test' children={<Test />} />} />
      <UseComponentVisible id='homepage-todo'>
        <Widget_Container name="todo" children={<TodoApp />} />
      </UseComponentVisible>
      <UseComponentVisible id='need-todo'>
        <Widget_Container name='Need To Do' children={<TodoDropdown />} />
      </UseComponentVisible>
    </div>
  )
}
