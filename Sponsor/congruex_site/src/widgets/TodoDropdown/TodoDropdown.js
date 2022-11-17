import React from 'react'
import TodoDropdownItem from './TodoDropdownItem'
import items from '../../data/needtodo.json'

export default function TodoDropdown() {
  return (
    <div className='dropdown_menu'>
      { items.map((item, id) => <TodoDropdownItem key={id} item={item} />) }
    </div>
  )
}
