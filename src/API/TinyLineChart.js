import React from 'react'
import {LineChart, Line, Tooltip} from "recharts";
import './Display.css'

const Tinylinechart = () => {
  

    const data = [
        {name: '2018', value:2000000000},
        {name: '2019', value:1500000000},
        {name: '2020', value:100000000},
        {name: '2021', value:5000000000},
        {category: 'Tinylinechart'}
    ]

    return (

     <div className='chart'>
         <h2>TinyLineChart</h2>
      <div>
        
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </div>
     </div>
    )
}

export default Tinylinechart
