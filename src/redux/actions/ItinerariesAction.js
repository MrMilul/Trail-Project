import axios from 'axios'
import {
  ITINERARY_REQUEST,
  ITINERARY_REQUEST_SUCCESS,
  ITINERARY_REQUEST_FAIL
} from '../types/ItinerariesTypes'


export const getItinerary = (values) => async (dispatch) => {
  console.log(values)
  dispatch({
    type: ITINERARY_REQUEST
  })

  try {
    const { data } = await axios.post("https://api.digitransit.fi/routing/v1/routers/finland/index/graphql",
   
      {
        query: `{
                  plan(
                   
                    fromPlace: "Kamppi, Helsinki::60.168992,24.932366",
                    toPlace: "Pisa, Espoo::60.175294,24.684855",
                    numItineraries: 5,
                    transportModes: [{mode: BUS}, {mode: RAIL}, {mode:TRAM}, {mode: FERRY}, {mode:WALK}]
                    walkReluctance: 2.1,
                    walkBoardCost: 300,
                    minTransferTime: 600,
                    walkSpeed: 1.7,
                  ) {
                    itineraries{
                      walkDistance
                      duration
                      legs {
                        mode
                        startTime
                        endTime
                        from {
                          lat
                          lon
                          name
                          stop {
                            code
                            name
                          }
                        }
                        to {
                          lat
                          lon
                          name
                          stop {
                            code
                            name
                          }
                        }
                        trip {
                          tripHeadsign
                          routeShortName
                        }
                        distance
                        legGeometry {
                          length
                          points
                        }
                      }
                    }
                  }
                }`
      }
    )

    dispatch({
      type: ITINERARY_REQUEST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ITINERARY_REQUEST_FAIL,
      payload: error ? error : "nothing"
    })
  }
}



