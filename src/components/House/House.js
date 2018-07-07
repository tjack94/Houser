import React from 'react'
import axios from 'axios'

export default function House(props){
    return (
        <div className="house_container">
            <div>
                <img className="house_photo" src={props.currentHouse.image_url} alt="image of house"/>
            </div>
            
            <div className="house_details">
            <p>Property Name: {props.currentHouse.property_name}</p>
            <p>Address: {props.currentHouse.address}</p>
            <p>City: {props.currentHouse.city}</p>
            <p>State: {props.currentHouse.state}</p>
            <p>Zip: {props.currentHouse.zip}</p>
            </div>
            <div className="pricing_details">
                <p>Monthly Mortgage: {props.currentHouse.mortgage}</p>
                <p>Desired Rent: {props.currentHouse.rent}</p>
            </div>
            <div className="button_container">
            <button  className= "delete_button" onClick={()=>{
                axios.delete(`/api/house/${props.currentHouse.id}`).then(()=>props.getHouses())}
            }>x</button>
            </div>
        </div>
    )
}