import React from 'react'
import { ComponentVisibilityModal } from '../../components';
import { UseComponentVisible } from '../../hooks';
import { TodoDropdown, Widget_Container } from '../../widgets';

function Ryan_Page() {
  return (
    <div className='App w-full text-orange-400 pt-4'>
      Nothing here
      <ComponentVisibilityModal />
      <UseComponentVisible id='need-todo'>
        <Widget_Container name='Need To Do' children={<TodoDropdown />} />
      </UseComponentVisible>
    </div>
  )
}

export default Ryan_Page;