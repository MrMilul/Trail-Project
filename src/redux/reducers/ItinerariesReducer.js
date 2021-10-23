import {
    ITINERARY_REQUEST,
    ITINERARY_REQUEST_SUCCESS,
    ITINERARY_REQUEST_FAIL
} from '../types/ItinerariesTypes'



export const getItineraryReducer = (state={}, action) =>{
    console.log(action.payload)
    switch (action.type) {
        case ITINERARY_REQUEST:
            return { loading: true }
        case ITINERARY_REQUEST_SUCCESS:
            return {
                loading: false,
                data: action.payload
            }
        case ITINERARY_REQUEST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }

}