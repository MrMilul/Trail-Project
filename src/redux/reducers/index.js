import { combineReducers } from 'redux'
import { getAddressReducer } from './AddressComReducer'
import {getItineraryReducer} from './ItinerariesReducer'

const rootReducer = combineReducers({
    addressReducer: getAddressReducer,
    itineraryReducer:getItineraryReducer
})

export default rootReducer