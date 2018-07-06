import React from 'react'
import axios from 'axios'

export default function House(props){
    return (
        <div>
            <button onClick={()=>{
                axios.delete(`/api/house/${props.currentHouse.id}`).then(()=>props.getHouses())}
            }>x</button>
            <p>Property Name: {props.currentHouse.property_name}</p>
            <p>Address: {props.currentHouse.address}</p>
            <p>City: {props.currentHouse.city}</p>
            <p>State: {props.currentHouse.state}</p>
            <p>Zip: {props.currentHouse.zip}</p>
        </div>
    )
}