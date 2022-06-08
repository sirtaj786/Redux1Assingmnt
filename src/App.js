

// import { useDispatch, useSelector } from 'react-redux';
// import './App.css';

// function App() {
 
//   const dispatch=useDispatch()
//   const count=useSelector((state)=>state.count)
 
//   return (
//     <div className="App">
//       <h1>Counter:{count}</h1>
//       <div>
//         <button onClick={()=>dispatch({type:'add'})

//         }>+</button>
//           <button onClick={()=>dispatch({type:'sub'})}>-</button>

//       </div>
//     </div>
//   );
// }

// export default App;










import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { inc,dec,add,sub,mult,divide,reset,set_val } from "./Store/action";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const input_val = useSelector((state) => state.input);
  console.log(count,input_val);
  return (
    <div className="App">
      
      <h1>Counter:{count}</h1>
      <div>
        <button onClick={() => dispatch(dec())}>-</button>
        <button onClick={() => dispatch(inc())}>+</button>
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => {
            dispatch(set_val(e.target.value));
          }}
        />
        <div>
          <button onClick={() => dispatch(add(input_val))}>add</button>
          <button onClick={() => dispatch(sub(input_val))}>sub</button>
          <button onClick={() => dispatch(mult(input_val))}>mult</button>
          <button onClick={() => dispatch(divide(input_val))}>divide</button>
          <button onClick={() => dispatch(reset(input_val))}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;