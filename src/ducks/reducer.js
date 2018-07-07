const initialState = {
    name: "",
    address: "",
    city: "",
    state1: "",
    zip: 0,
    mortgage: 0,
    url: "",
    rent: 0
}
const UPDATE_NAME= "UPDATE_NAME";
const UPDATE_ADDRESS= "UPDATE_ADDRESS";
const UPDATE_CITY= "UPDATE_CITY";
const UPDATE_STATE ="UPDATE_STATE";
const UPDATE_ZIP= "UPDATE_ZIP";
const UPDATE_MORTGAGE= "UPDATE_MORTGAGE";
const UPDATE_URL= "UPDATE_URL";
const UPDATE_RENT= "UPDATE_RENT"

const UPDATE_STEP_ONE= "UPDATE_STEP_ONE"
const UPDATE_STEP_THREE= "UPDATE_STEP_THREE"
const CANCEL= "CANCEL"



export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME:
        return Object.assign({}, state, {name: action.payload});

        case UPDATE_ADDRESS:
        return Object.assign({}, state, {address: action.payload})

        case UPDATE_CITY:
        return Object.assign({}, state, {city: action.payload});

        case UPDATE_STATE:
        return Object.assign({}, state,{state1: action.payload});

        case UPDATE_ZIP:
        return Object.assign({}, state, {zip: action.payload});

        case UPDATE_MORTGAGE:
        return Object.assign({}, state, {mortgage: action.payload})

        case UPDATE_URL:
        return Object.assign({}, state, {url: action.payload});

        case UPDATE_RENT:
        return Object.assign({}, state, {rent: action.payload}) 

        case UPDATE_STEP_ONE:
        return Object.assign({}, state, {name: action.payload.name, address: action.payload.address, city: action.payload.city, state1: action.payload.state, zip: action.payload.zip})

        case UPDATE_STEP_THREE:
        return Object.assign({}, state, {mortgage: action.payload.mortgage, rent: action.payload.rent})
        
        case CANCEL:
        return Object.assign({}, state, {name: action.payload.name, address: action.payload.address, city: action.payload.city, state1: action.payload.state, zip: action.payload.zip, url: action.payload.url, mortgage: action.payload.mortgage, rent: action.payload.rent})
        default: return state
    }
}

export function updateName(name){
    return{
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAddress(address){
    return{
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState(state){
    return{
        type: UPDATE_STATE,
        payload: state
    }
}
export function updateZip(zip){
    return{
        type: UPDATE_ZIP,
        payload: zip
    }
}
export function updateMortgage(mortgage){
    return{
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}
export function updateUrl(url){
    return{
        type: UPDATE_URL,
        payload: url
    }
}
export function updateRent(rent){
    return{
        type: UPDATE_RENT,
        payload: rent
    }
}


export function updateStepOne(name, address, city, state, zip){
    return {
        type: UPDATE_STEP_ONE,
        payload: {
            name,
            address,
            city,
            state,
            zip
        }
    }
}
export function updateStepThree(mortgage, rent){
    return{
        type: UPDATE_STEP_THREE,
        payload:{
            mortgage,
            rent
        }
    }
}
export function cancelInput(){
    return{
        type: CANCEL,
        payload: initialState
    }
}