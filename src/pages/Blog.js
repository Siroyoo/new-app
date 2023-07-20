import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../Card_or_table.css";

export default function Blog() {
  const [members, setmembers] = useState([]);
  const [text, settext] = useState("");

  const getMembers = async () => {
    axios
      .get("http://localhost:8080/member")
      .then((res) => {
        setmembers(res.data);
        console.log(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMembers();
  }, []);
  // []이면 창이 불러올때 데이터를 불러오고 끝난다
  console.log(members);
  return (
    <div>
      {/* <div className="cardcont">
        <div className="boxrap">
          {members.map((member, idx) => (
            <div key={idx} className="contain">
              <img src={member.photo} alt="card" />
              {member.year <= 1 ? <p className="new">new</p> : ""}
              <h2>{member.name}</h2>
              <p>{member.job}</p>
            </div>
          ))}
        </div> */}
      {members.map((el, idx) => (
        <div key={idx}>
          <div>name={el.name}</div>
          <div>job={el.job}</div>
          <div>year={el.year}</div>
        </div>
      ))}
      <form
        onSubmit={() => {
          axios.post("http://localhost:8080/member", {
            name: text,
            job: "developer",
            year: 1,
          });
        }}
      >
        <input
          type="text"
          name="name"
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <button type="submit">맴버 추가하기</button>
      </form>
    </div>
  );
}
