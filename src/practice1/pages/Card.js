import React from "react";
import { useState } from "react";
import DB2 from "../statics/db2.json";
import "../Card_or_table.css";
import ProfileForm from "../components/ProfileFrom";

export default function Card() {
  const [profile, setProfile] = useState(DB2.member);
  const [cardView, setCardView] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile([
      ...profile,
      {
        name: e.target.name.value,
        photo: e.target.photo.value,
        job: e.target.job.value,
        year: e.target.year.value,
      },
    ]);
  };

  return (
    <div className="App">
      <ProfileForm handleSubmit={handleSubmit} />

      <button onClick={() => setCardView(true)}>
        <h2>카드로 보기</h2>
      </button>
      <button onClick={() => setCardView(false)}>
        <h2>테이블로 보기</h2>
      </button>

      {cardView ? (
        <>
          <div className="cardcont">
            <div className="boxrap">
              {profile.map((member, idx) => (
                <div key={idx} className="contain">
                  <img src={member.photo} alt="card" />
                  {member.year <= 1 ? <p className="new">new</p> : ""}
                  <h2>{member.name}</h2>
                  <p>{member.job}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="tablecont">
          <div className="tablerap">
            <table>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>사진</th>
                  <th>직업</th>
                  <th>연차</th>
                  <th>액션</th>
                </tr>
              </thead>
              <tbody>
                {profile.map((member, idx) => (
                  <tr key={idx} className="tbl">
                    <td className="tblname">
                      <h2>{member.name}</h2>
                    </td>
                    <td className="tblimg">
                      <img src={member.photo} alt="tblcard" />
                      {member.year <= 1 ? <p className="tblnew">new</p> : ""}
                    </td>
                    <td className="tbljob">
                      <p>{member.job}</p>
                    </td>
                    <td>
                      <p>{member.year}</p>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setProfile(
                            profile.filter((_, index) => index !== idx)
                          );
                        }}
                        className="btn-delete"
                      >
                        삭제
                      </button>
                      <button
                        onClick={() => {
                          const name = prompt("이름을 입력하세요");
                          const photo = prompt("사진을 입력하세요");
                          const job = prompt("직업을 입력하세요");
                          const year = prompt("연차를 입력하세요");
                          setProfile(
                            profile.map((member, index) =>
                              index === idx
                                ? {
                                    ...member,
                                    name,
                                    photo,
                                    job,
                                    year,
                                  }
                                : member
                            )
                          );
                        }}
                        className="btn-update"
                      >
                        수정
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
