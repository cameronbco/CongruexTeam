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
            <h1 className='container font-bold text-3xl text-white pt-10 p-2'>Not Found</h1>
            <h3 className='container font-bold text-xl text-white'>Redirecting...</h3>
        </>
    )
}
