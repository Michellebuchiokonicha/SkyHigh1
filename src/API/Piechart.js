
import React from 'react'
import { PieChart, Pie, Tooltip} from "recharts";
import './Display.css'

const Piechart = () => {
  

    const data = [
        {name: '2018', value:2000000000},
        {name: '2019', value:1500000000},
        {name: '2020', value:100000000},
        {name: '2021', value:5000000000},
        {category: 'Piechart'}
        

    ]

    return (

        
     <div className='chart'>
         <h2>PieChart</h2>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        </div>
     </div>
    )
}

export default Piechart
