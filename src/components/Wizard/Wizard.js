import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        }
    }
    handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
    }
    handleSubmit(){
        const newHouse= {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        axios.post('/api/house', newHouse).then(()=>{})
    }
    render(){
        return (
            <div>
                <h1>Add New Listing</h1>
                <Link to= "/"><button>Cancel</button></Link>
                <b>Property Name</b>
                <input type="text" value= {this.state.name} onChange={(e)=> this.handleChange(e, "name")}/>
                <b>Address</b>
                <input type="text" value= {this.state.address} onChange={(e)=> this.handleChange(e, "address")}/>
                <b>City</b>
                <input type="text" value= {this.state.city} onChange={(e)=> this.handleChange(e, "city")}/>
                <b>State</b>
                <input type="text" value= {this.state.state} onChange={(e)=> this.handleChange(e, "state")}/>
                <b>Zip</b>
                <input type="text" value= {this.state.zip} onChange={(e)=> this.handleChange(e, "zip")}/>
               <Link to= "/"><button onClick= {()=> this.handleSubmit()}>complete</button></Link>
            </div>
        )
    }
}
export default Wizard