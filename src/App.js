import React, { Component } from 'react';
import './App.css';
import { data } from './API/data';
import Products from './API/Products';
import Filter from './API/Filter';
import axios from 'axios';
import Piechart from './API/Piechart';
import Barchart from './API/Barchart';
// import Compositebarchart from './API/CompositeBarchart';
import Linechart from './API/Linechart';
import Areachart from './API/AreaChart';
import Tinylinechart from './API/TinyLineChart';


export class App extends Component {

  constructor() {
    super()
    this.state = {
       products:data,
       sort:'',
       cat:'',
    }
  }
  

  // sorting
  // sorting = (e)=>{

  //     e.preventDefault()
  //     axios.post('https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',
  //      {"angular_test": "angular-developer"}, this.state)
  //     .then(response =>{
  //        console.log(response)
  //     })

  //   const sorting = e.target.value;

  //   const sortRes = this.state.products.sort((a,b)=>{
  //     if(sorting==='all'){
  //       return a.id>b.id?1:-1
  //     }
  //     if(sorting==='low'){
  //       return a.price>b.price?1:-1
  //     }
  //     if(sorting==='high'){
  //       return a.price<b.price?1:-1
  //     }
      
      
  //   })
  //   this.setState({
  //     sort:sorting,
  //     products:sortRes
  //   })
  
  // }

  // Filtering by name
  filteringName = (e)=>{

    e.preventDefault()
    axios.post('https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',
     {"angular_test": "angular-developer"}, this.state)
    .then(response =>{
       console.log(response)
    })

    let categ = e.target.value;
    if(categ===''){
      this.setState({
        cat:categ,
        products:data
      })
    }
    else{
      this.setState({
        cat:categ,
        products:data.filter(product=>{
          // return product.category===e.target.value
          return product.category.indexOf(e.target.value)
           >=0
        })
      })
    }
  }

  // Region
  // filterbyRegion = (e)=>{
 
  //   const region = e.target.value;

  //   e.preventDefault()
  //   axios.post('https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',
  //    {"angular_test": "angular-developer"}, this.state)
  //   .then(response =>{
  //      console.log(response)
  //   })

  //   let categ = e.target.value;
  //   if(region===''){
  //     this.setState({
  //       region:region,
  //       products:data
  //     })
  //   }
  //   else{
  //     this.setState({
  //       region:region,
  //       products:data.filter(product=>{
  //         // return product.category===e.target.value
  //         return product.region.indexOf(e.target.value)
  //          >=0
  //       })
  //     })
  //   }
  // }


    render() {

        return (
            <div className='App'>
              <Products products={this.state.products}/>
              <Filter 
               sorting={this.sorting}
               sorts={this.state.sort}
               filteringName={this.filteringName}
               cat={this.state.cat}
               filterbyRegion={this.filterbyRegion}
               region={this.state.region}
              />
              { (this.state.cat==='Barchart' || this.state.cat==='') && 
                <Barchart />
                }
              { (this.state.cat==='Piechart' || this.state.cat==='') && <Piechart />}
              {(this.state.cat==='Linechart' || this.state.cat==='') && <Linechart />}
              {(this.state.cat==='Areachart' || this.state.cat==='') && <Areachart />}
              {(this.state.cat==='Tinylinechart' || this.state.cat==='') && <Tinylinechart />}
            </div>
        )
    }
}

export default App
