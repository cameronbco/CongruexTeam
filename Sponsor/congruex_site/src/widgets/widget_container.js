import React from 'react'

// simple container to put widget in
const widget_container = (props) => {
    const { name, children } = props;

    return (
    <>
        <div className='widget_container'>
            <div className='widget_container_banner'>
                { name }
            </div>
            <div  style={{ padding: '0.75rem' }}>
                { children }
            </div>
        </div>
    </>
  )
}

export default widget_container;