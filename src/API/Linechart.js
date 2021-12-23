import React from 'react'
import { YAxis, Legend, XAxis, CartesianGrid, LineChart, Line, Treemap, Tooltip} from "recharts";
import './Display.css'

const Linechart = () => {
  

    const data = [
        {name: '2018', value:20000},
        {name: '2019', value:15000},
        {name: '2020', value:10000},
        {name: '2021', value:50000},
        {category: 'Linechart'}
    ]

    return (

     <div className='chart'>
         <h2>LineChart</h2>
      <div>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </div>
     </div>
    )
}

export default Linechart
