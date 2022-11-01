import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }, [])
    return <h1 className='container' style={{color: "white"}}>Not Found</h1>
}
