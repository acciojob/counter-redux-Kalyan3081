import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from './actions'

const Decrementbutton = () => {
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default Decrementbutton
