import React, { useState }from 'react';
// onchange 입력되는 값마다 받아옴
export default function InputReset() {
    // useState [값, 함수] = 상태 관리를 하기 위해서.
    // e = event
    const [text, setText] = useState('강백호')
    const handleReset = () => {setText('')};

  return (
    <div>
       <input value={text}
       onChange={(e) => {setText(e.target.value);}}></input>
       <div>입력 값: {text}</div>
       <button onClick={handleReset}>Reset</button>
       </div>
  )
}
