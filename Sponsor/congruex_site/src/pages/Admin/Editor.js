import React from 'react'
import './admin.css';
import items from '../../data/menu.json'
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
                <div className='list-item open'>
                    <div className='list-title'>
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
        <div className='widget_container'>
            <div className='widget_container_banner'>
                Page Editor
            </div>
            <Editor_Menu />
        </div>
    </div>
  )
}

export default Editor;