import React from 'react'
import './admin.css';
import items from '../../data/menu.json'
import { ThemeSwitcher } from '../../components';
import { Widget_Container } from '../../widgets';
import { BsMoon } from 'react-icons/bs';
// import { Link } from 'react-router-dom'

function Editor_Menu() {
    return (
        <div className='editor_menu'>
          { items.map((item, index) => <Editor_Menu_Item key={index} item={item} />) }
        </div>
    )
}

function Editor_Menu_Item({ item }) {
    if (item.childrens) {
        return (
            <>
                <div className='list-none list-item open'>
                    <div className='list-title text-2xl font-bold'>
                        <h3>
                            { item.title }
                        </h3>
                    </div>
                    <div className='list-content' style={{ "font-family": "Serif", "margin": "20px"}}>
                        <p className='list-content-list'>{ item.childrens.map((child, index) => <Editor_Menu_Item key={index} item={child} />) }</p>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <> 
                <div>
                    {item.title}
                </div>
            </>
        )
    }
}

function Editor() {
  return (
    <div className='App'>
        <Widget_Container name='Page Editor' children={<Editor_Menu />} />
        <Widget_Container name='Theme Switcher' children={<ThemeSwitcher />} />
    </div>
  )
}

export default Editor;