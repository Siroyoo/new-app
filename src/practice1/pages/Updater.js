import React, { useState } from 'react';

export default function Updater() {
  const [age, setAge] = useState(20);

  const increment = () => {
    // setAge(age + 1);
    //인자를 받아서 인자에 +1를 함.
    setAge((prev) => prev + 1)
  };

  return (
    <div>
      <p>제 나이는 {age}입니다.</p>
      <button onClick={() => {
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+5</button>
      <button onClick={increment}>+1</button>
    </div>
  );
}