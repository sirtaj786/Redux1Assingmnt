import { ADDITION, DECREMENT, DIVISION, INCREMENT, MULTIPLY, RESET, SETINPUT, SUBTRACT } from "./action.types";

export const set_val=(val)=>({type:SETINPUT,payload:Number(val)})
export const inc=(val)=>({type:INCREMENT})
export const dec = (val) => ({ type: DECREMENT});
export const add = (val) => ({ type: ADDITION, payload: val });
export const sub = (val) => ({ type: SUBTRACT, payload: val });
export const mult = (val) => ({ type: MULTIPLY, payload: val });
export const divide = (val) => ({ type: DIVISION, payload: val });
export const reset = (val) => ({ type: RESET});