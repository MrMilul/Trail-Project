import axios from "axios"

import {
    ADDRESS_REQUEST,
    ADDRESS_REQUEST_SUCCESS,
    ADDRESS_REQUEST_FAIL
} from "../types/AddressType"


export const getAddress = (values) => async (dispatch) => {

    dispatch({
        type: ADDRESS_REQUEST,

    })
    try {const reqOne = axios.get(`https://api.digitransit.fi/geocoding/v1/search?text=${values.firstAddress}&size=1`);
    const reqTwo = axios.get(`https://api.digitransit.fi/geocoding/v1/search?text=${values.secondAddress}%2016&size=1`);
    
        const { ...data } = await axios.all([reqOne, reqTwo])

        dispatch({
            type: ADDRESS_REQUEST_SUCCESS,
            payload: data,
            departureTime: values.departureTime,
            departureDate: values.departureDate
        })

    } catch (error) {
        dispatch({
            type: ADDRESS_REQUEST_FAIL,
            payload: error
        })
    }
}