import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItinerary } from '../../redux/actions/ItinerariesAction'

const TimetableScreen = () => {
    const [originLatLon, setOriginLatLon] = useState({})
    const [destinationLatLon, setDestinationLatLon] = useState({})

    const bigData = useSelector(state => state.addressReducer)
    const { loading, data, error, departureTime, departureDate } = bigData


    const dispatch = useDispatch()

    useEffect(() => {
        if (Object.keys(bigData).length > 1) {
            setOriginLatLon({
                name: data[0].data.features[0].properties.name,
                locality: data[0].data.features[0].properties.locality,
                lon: data[0].data.features[0].geometry.coordinates[0],
                lat: data[0].data.features[0].geometry.coordinates[1]
            })
            setDestinationLatLon({
                name: data[1].data.features[0].properties.name,
                locality: data[1].data.features[0].properties.locality,
                lon: data[1].data.features[0].geometry.coordinates[0],
                lat: data[1].data.features[0].geometry.coordinates[1]
            })

            let values = {
                originLatLon,
                destinationLatLon,
                departureDate,
                departureTime
            }
            
            dispatch(getItinerary(values))
        }
        
    }, [bigData])
    const clickHandler = () => {
            setOriginLatLon({
                name:data[0].data.features[0].properties.name,
                locality:data[0].data.features[0].properties.locality,
                lon: data[0].data.features[0].geometry.coordinates[0],
                lat: data[0].data.features[0].geometry.coordinates[1]
            })
            setDestinationLatLon({
                name:data[1].data.features[0].properties.name,
                locality:data[1].data.features[0].properties.locality,
                lon: data[1].data.features[0].geometry.coordinates[0],
                lat: data[1].data.features[0].geometry.coordinates[1]
            })

    }
    const clickHandler1 = () => {
        console.log(originLatLon)
        console.log(destinationLatLon)
        console.log(departureTime)
        console.log(departureDate)
    }
    const clickHandler2 = () => {
        let values = {
            originLatLon,
            destinationLatLon,
            departureDate,
            departureTime
        }
        
       
            dispatch(getItinerary(values))

    }
    return (
        <div>
            <button onClick={clickHandler}>finde</button>
            <button onClick={clickHandler1}>log</button>
            <button onClick={clickHandler2}>fetch graphql</button>

        </div>
    )
}

export default TimetableScreen
