import './style.scss'
import React from 'react'

export default function Button(props) {
    return (
        <button className={`btn ${props.className}`}>{props.text}</button>
    )
}
