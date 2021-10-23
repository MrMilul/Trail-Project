import React from 'react'
import InputScreen from './Screen/InputScreen'
import TimetableScreen from './Screen/TimetableScreen'



const Home = () => {

    return (

        <div className="container mt-5">

            <div className="row ">

                {/* Input Section */}
                <div className="col-sm-12 col-md-5">
                    <InputScreen />

                </div>

                {/* Info Section */}
                <div className="col-sm-12 col-md-7 bg-success">
                    <TimetableScreen/>
                </div>
            </div>
        </div>
    )
}

export default Home
