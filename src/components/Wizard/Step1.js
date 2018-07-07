import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateStepOne} from '../../ducks/reducer'

class StepOne extends Component{
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
        const {updateStepOne} = this.props
        return (
            <div className="inputs_and_button">
            <div className="inputs_container">
                <div className="input">
                <b>Property Name</b>
                <input type="text" value= {this.state.name} onChange={(e)=> this.handleChange(e, "name")}/>
                </div>
                <div className="input">
                <b>Address</b>
                <input className="address" type="text" value= {this.state.address} onChange={(e)=> this.handleChange(e, "address")}/>
                </div>
                <div className="input" id="city_state">
                <div>
                <b>City</b>
                <input type="text" value= {this.state.city} onChange={(e)=> this.handleChange(e, "city")}/>
                </div>
                <div>
                <b>State</b>
                <input type="text" value= {this.state.state} onChange={(e)=> this.handleChange(e, "state")}/>
                </div>
                <div>
                <b>Zip</b>
                <input type="text" value= {this.state.zip} onChange={(e)=> this.handleChange(e, "zip")}/>
                </div>
                </div>
                </div>
                <div>
               <Link to= "/wizard/step2"><button className="next_button" onClick={()=> updateStepOne(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)} >Next Step</button></Link>
               </div>
               </div>
           
        )
    }
}

function mapStateToProps(state){
   const  {name, address, city, state1, zip} = state
   return{
       name,
       address,
       city,
       state,
       zip
   }
}
export default connect(mapStateToProps, {updateStepOne})(StepOne)