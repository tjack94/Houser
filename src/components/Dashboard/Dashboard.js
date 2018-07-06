import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()
        this.state= {
            houses: [],
        }
        
    }
    componentWillMount(){
       this.getHouses()

    }
    
    getHouses(){
        axios.get('/api/houses').then(response=>{
            this.setState( { houses: response.data } )
        })
    }
    deleteItem(id){
        axios.delete(`/api/house/${id}`).then(()=>this.getHouses())
    }
    render(){
        const houseList= this.state.houses.map((house, index)=>{
           return <House key= {index} 
                        currentHouse={house}
                        getHouses= {()=> this.getHouses()}
                        />
        })
        return (
            <div>
                Dashboard
                <Link to= '/wizard'><button>Add New Property</button></Link>
                {houseList}
            </div>
        )
    }
}
export default Dashboard