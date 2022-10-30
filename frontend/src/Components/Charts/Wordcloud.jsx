import React from 'react'
import {CChart} from '@coreui/react-chartjs'
const Wordcloud = () => {
    return (
        <div>
            <CChart
            style={{width:"75vh" , height:"55vh" , backgroundColor:"transparent" , borderColor:"transparent"}}
                type="doughnut"
                data={{
                    labels: ['Positive Comments', 'Negative Comments', 'Hashtags', 'Reviews' , 'Likes'],
                    datasets: [
                        {
                            data: [790, 220,610,320, 544],
                            backgroundColor: ['#D98100', '#E1B200', '#ABA597', '#4B85A8', '#182139'],
                        },
                    ],
                }}
            />
        </div>
    )
}

export default Wordcloud