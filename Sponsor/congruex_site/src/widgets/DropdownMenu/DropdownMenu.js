import React from 'react'
import DropdownMenuItem from './DropdownMenuItem'
import items from '../../data/menu.json'

export default function DropdownMenu() {
  return (
    <div className='dropdown_menu'>
      { items.map((item, index) => <DropdownMenuItem key={index} item={item} />) }
    </div>
  )
}
