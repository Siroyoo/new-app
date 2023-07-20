import React, { useState } from 'react';

export default function FormObject() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
console.log(form.firstName)
  return (
    <div>
      <div>
        <label>
          <p>이름: </p>
          <input placeholder='이름을 입력하세요' name='firstName' value={form.firstName} onChange={(e) => {setForm({
            firstName: e.target.value,
            lastName: form.lastName,
            email: form.email,
          });
        }}/>
        </label>
        <label>
          <p>성: </p>
          <input placeholder='성을 입력하세요' name='lastName' value={form.lastName} onChange={(e) => {setForm({
            firstName: form.firstName,
            lastName: e.target.value,
            email: form.email,
          });
        }} />
        </label>
        <label>
          <p>이메일: </p>
          <input type='email' placeholder='이메일을 입력하세요' name='email' value={form.email} onChange={(e) => {setForm({
            firstName: form.firstName,
            lastName: form.lastName,
            email: e.target.value,
          });
        }}/>
        </label>
        <div>
          <h2>입력한 정보를 확인하세요.</h2>
          {form.firstName ? (
            <p>이름: {form.firstName}</p>
          ) : (
            <p>이름을 입력하지 않았습니다.</p>
          )}
          {form.lastName ? <p>성: {form.lastName}</p> : <p>성을 입력하지 않았습니다.</p>}
          {form.email ? (
            <p>{form.email}</p>
          ) : (
            <p>이메일을 입력하지 않았습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}