import React from 'react'
import { increment } from './actions'
import { useDispatch } from 'react-redux'


const Incrementbutton = () => {

    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </>
    )
}

export default Incrementbutton