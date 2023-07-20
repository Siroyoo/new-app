import React, { useState } from 'react';

export default function Counter() {
    //useState할때  snippet 해야 자동으로 공식이 나옴.
    //handle이 붙는 이유는 event가 붙는 함수라고 생각하면 됨.
    const [increase, setIncrease] = useState(0);

  return (
   <div>
        <button style={{margin: "10px", padding: "10px"}} onClick={() => {
            setIncrease(increase - 1);}}>-</button>
            {increase}
            <button style={{margin: "10px", padding: "10px"}} onClick={() => {
            setIncrease(increase+1);
        }}>+</button>
    </div>
  );
}
