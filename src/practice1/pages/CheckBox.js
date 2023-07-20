import React, { useState } from 'react'

export default function CheckBox() {
    const [checked, setChecked] = useState(false);

    const handleCheck = (e) => {
        setChecked(e.target.checked);
    };

  return (
    <div>
        <input type='checkbox' onChange={handleCheck} />퇴실 누르기
        <div>퇴실 {checked ? '':'안'}눌렀습니다.</div>
    </div>
  );
}
