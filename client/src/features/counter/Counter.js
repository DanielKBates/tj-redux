import React, { useState } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  selectCount,
  increaseByInput,
  increaseIfOdd
} from "./counterSlice";

const Counter = () => {
  const [incAmt, setIncAmt] = useState(5);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();



  return (
    <div className="w-2/3 mx-auto p-5 mt-10 space-y-6 border-2 border-blue-500 rounded-xl bg-gray-100">

        {/* Reading the value of the `counter` state in the redux store */}
      <h1 className=" text-center text-2xl">Total Count: {count} </h1>

      <div className="flex flex-col justify-center space-y-4 w-full">
        <div className="w-full flex  space-x-4 justify-center">

            {/* using `useDispatch` to dispatch the `increase` action  */}
          <button
            onClick={() => dispatch(increase())}
            className="border-2 px-4 text-2xl border-indigo-500 rounded-xl"
          >
            +
          </button>

                {/* using `useDispatch` to dispatch the `decrease` action  */}
          <button onClick={()=> dispatch(decrease())} className="border-2 px-4 text-2xl border-indigo-500 rounded-xl">
            -
          </button>

        </div>
        <div className="w-full flex space-x-2  justify-center">
          <input
            value={incAmt}
            onChange={(e) => setIncAmt(e.target.value)}
            className="text-center border-2 w-1/12 text-2xl border-indigo-500 rounded-xl"
          />

          {/* giving our action a payload, check the redux dev tools to see how the action is generated. check `counterSlice` to see how the payload is handled */}
          <button 
          onClick={()=> dispatch(increaseByInput(Number(incAmt) || 0))}
          className=" border-2 px-4 text-2xl border-indigo-500 rounded-xl">
            Add Amount
          </button>
          <button 
          onClick={()=> dispatch(increaseIfOdd(Number(incAmt) || 0))}
          className=" border-2 px-4 text-2xl border-indigo-500 rounded-xl">
            Add if odd
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
