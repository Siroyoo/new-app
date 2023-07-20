import React, { useState } from 'react';

export default function FormTest() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [alert, setAlert] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
};
console.log(firstName, lastName, alert)

  return (
    <div>
      
      <form onSubmit={(e) => {
        //preventDefault 새로고침이 안되는 의미 => 구글링해서 확인
        e.preventDefault();
        setAlert(`${firstName} ${lastName} 님`);
        setFirstName('');
        setLastName('');
      }}>
         <input type='text' onChange={handleFirstName} placeholder='First name' value={firstName}/>
         <input type='text' onChange={handleLastName} placeholder='Last name' value={lastName}/>
         <button type='submit'>Submit</button>
      </form>
      <h1>{alert}</h1>
      
    </div>
  );
}