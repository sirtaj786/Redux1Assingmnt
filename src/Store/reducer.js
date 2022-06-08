

import { ADDITION, DECREMENT, DIVISION, INCREMENT, MULTIPLY, RESET, SETINPUT, SUBTRACT } from "./action.types"

let initialState={
    count:0,
    input:1,
}

export const reducer = ( state = initialState,action )=>{
    console.log(state,action)
    switch(action.type){
        case INCREMENT:{ state.count++; return {...state}}
        case DECREMENT: {state.count-- ; return {...state}}
        case SETINPUT:{state.input = action.payload; return {...state}}
        case ADDITION : {state.count += action.payload; return {...state}}
        case  SUBTRACT : {state.count -= action.payload; return {...state}}
        case  MULTIPLY : {state.count *= action.payload; return {...state}}
        case  DIVISION: {state.count /= action.payload; return {...state}}
        case  RESET : {state.count=0; return {...state}}
        default : return {...state}
        
    }
}