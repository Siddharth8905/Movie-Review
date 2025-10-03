import React from 'react'
import { useLocation } from 'react-router-dom'

export default function UpdateDetails() {
    const location = useLocation()
    const {name,email}=location.state|| {}

    return (
        <div>{name} {email}</div>
    )
}
