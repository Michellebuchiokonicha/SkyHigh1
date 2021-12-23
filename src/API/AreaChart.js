import React from 'react'
import { YAxis,  XAxis, Area, AreaChart, CartesianGrid, Tooltip} from "recharts";
import './Display.css'

const Areachart = () => {
  

    const data = [
        {name: '2018', value:20000},
        {name: '2019', value:15000},
        {name: '2020', value:10000},
        {name: '2021', value:50000},
        {category: 'Areachart'}
        

    ]

    return (


     <div className='chart' >
         <h2>Areachart</h2>
      <div>
        <AreaChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 5,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        
      </div>
     </div>
    )
}

export default Areachart
