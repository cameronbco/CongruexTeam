import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }, [])
    return (
        <>
            <h1 className='container' style={{color: "white", padding: "3rem 0 0.5rem 0"}}>Not Found</h1>
            <h3 className='container' style={{color: "white"}}>Redirecting...</h3>
        </>
    )
}
