import React from 'react'
import './Display.css'

export default function Filter({sorts, sorting, cat, filteringName}) {
    return (
        <div className='filter'>

            {/* filtering items by name */}
            <div className='select_filter'>
                    <p>Filter by Chart</p>
                <select value={cat} onChange={filteringName}>
                    <option value=''>All</option>
                    <option value='Barchart'>BarChart</option>
                    <option value='Piechart'>PieChart</option>
                    <option value='Linechart'>LineChart</option>
                    <option value='Areachart'>AreaChart</option>
                    <option value='Tinylinechart'>TinyLineChart</option>
                </select>
            </div>

            {/* sorting */}
            {/* <div className='select_filter'>
                <p>Filter by Date</p>
                <select value={sorts} onChange={sorting}>
                    <option value='all'>All</option>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                </select>
            </div> */}
            {/* <div className='select_filter'>
                <p>Filter by Region</p>
                <select value={sorts} onChange={sorting}>
                    <option value='all'>All</option>
                    <option value='London'>London</option>
                    <option value='North East'>North East</option>
                    <option value='North West'>North West</option>
                    <option value='Yorkshire'>Yorkshire</option>
                    <option value='East Midlands'>East Midland</option>
                    <option value='West Midland'>West Midlands</option>
                    <option value='Yorkshire'>Yorkshire</option>
                    <option value='South East'>South East</option>
                    <option value='South West'>South West</option>
                    <option value='East of Englad'>East of England</option>
                </select>
            </div> */}
        </div>
    )
}
