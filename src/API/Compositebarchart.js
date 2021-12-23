
import React from 'react'
import { BarChart, YAxis, Legend, XAxis, Bar, CartesianGrid, Tooltip} from "recharts";
import './Display.css'
const Barchart = () => {
  

    const data = [
        {name: '2018', value:20000},
        {name: '2019', value:15000},
        {name: '2020', value:10000},
        {name: '2021', value:50000},
        {category: 'Composite'},
        

    ]

    return (

        
     <div className='chart'>
         <h2>CompositeBar</h2>
      <div>
      <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
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
          <Bar dataKey="value" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
     
      </div>
     </div>
    )
}

export default Barchart
