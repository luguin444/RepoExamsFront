import React from 'react'

export default function Option (props) {

    const {text} = props

    return (
        <option value= {text}> {text} </option>
    );
}