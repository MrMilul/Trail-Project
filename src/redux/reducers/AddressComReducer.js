import {
    ADDRESS_REQUEST,
    ADDRESS_REQUEST_SUCCESS,
    ADDRESS_REQUEST_FAIL
} from "../types/AddressType"



export const getAddressReducer = (state = {}, action) => {
    switch (action.type) {
        case ADDRESS_REQUEST:
            return { loading: true,
            }
        case ADDRESS_REQUEST_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                departureTime: action.departureTime,
                departureDate: action.departureDate
            }
        case ADDRESS_REQUEST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }

}