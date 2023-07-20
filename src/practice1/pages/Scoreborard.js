import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  const handlePlusClick = () => {
    setPlayer({
      ...setPlayer,
      score: player.score + 1, // 직접 어떤것이 증가하는지 지정해주어서 증가 시킬수 있다
      // +1의 1만 변경하면 증가하는 값으 변경도 가능하게 된다.
      // 단 아래도 동일하게 바꾸어 주어하 된다
      //   score: e.target.value++,
    });
  };

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        {/* <button onClick={handlePlusClick} value={player.score}>
          +1
        </button> */}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
