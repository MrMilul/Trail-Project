import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAddress } from "../../redux/actions/AddressCompAction"

const InputScreen = () => {
    const [firstAddress, setFirstAddress] = useState()
    const [secondAddress, setSecondAddress] = useState()
    const [departure, setDeparture] = useState({
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toLocaleTimeString('en-GB').slice(0, 7)
    })
    const [departureTime, setDepartureTime] = useState(new Date().toLocaleTimeString('en-GB').slice(0, 7))
    const [departureDate, setDepartureDate] = useState(new Date().toISOString().slice(0, 10))
    const dispatch = useDispatch()


    const onChangeHandler1 = (value) => {
        setFirstAddress(value)
    }
    const onChangeHandler2 = (value) => {
        setSecondAddress(value)
    }


    const clickHandler = () => {
        let vaules = {
            firstAddress,
            secondAddress,
            departureTime,
            departureDate
        }
        dispatch(getAddress(vaules))

    }

    return (
        <div className="input-layout">

            <input type="text" onChange={(e) => onChangeHandler1(e.target.value)} placeholder="Origin Location" />


            <input type="text" onChange={(e) => onChangeHandler2(e.target.value)} placeholder="Destination Location" />
            <div className="row">
                <div className="col-6">
                    <input type="date" value={departureDate} onChange={(e) => { setDepartureDate(e.target.value) }} />
                </div>
                <div className="col-6">
                    <input type="time" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
                </div>
            </div>
            <button type="button"
                className="btn btn-outline-dark btn-lg btn-block"
                onClick={clickHandler}>Find Best Trip</button>
        </div>
    )
}

export default InputScreen
