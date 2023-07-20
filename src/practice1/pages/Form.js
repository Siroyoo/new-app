import React, {useState} from 'react';

export default function Form() {
    const [old, setOld] = useState(1);
    const [named, setNamed] = useState('윤진');
    const handleOld = () => {setOld(old + 1)};
    // const handleNamed = () => {
    //     setNamed ();
    // };
    function handleNamed(e) {
        setNamed (e.target.value);
        console.log(e.target.value);
    }

  return (
    <div>
        <input onChange={handleNamed} type='text'/>
        <button onClick={handleOld}>증가</button>
        <div>안녕 {named} 나이는 {old}이지?</div>
    </div>
  )
}
