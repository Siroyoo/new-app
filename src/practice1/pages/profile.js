import React, { useState } from "react";
import Detail from "../components/Detail";
import Avatar from "../components/Avatar";
import DB2 from "../statics/db2.json";
import ProfileForm from "../components/ProfileForm.json";

export default function Profile() {
  const [profile, setProfile] = useState(DB2);
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

      <button onClick={() => setCardView(false)} className="btn-table-view">
        테이블 보기{" "}
      </button>
      <button onClick={() => setCardView(true)} className="btn-card-view">
        카드 보기
      </button>

      {cardView ? (
        <>
          {" "}
          {profile.map((el, idx) => (
            <Detail
              name={el.name}
              image={el.photo}
              job={el.job}
              year={el.year}
              key={idx}
            />
          ))}
        </>
      ) : (
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
            {profile.map((el, idx) => (
              <tr key={idx}>
                <td>{el.name}</td>
                <td>
                  <Avatar image={el.photo} year={el.year} />
                </td>
                <td>{el.job}</td>
                <td>{el.year}</td>
                <td>
                  <button
                    onClick={() => {
                      setProfile(profile.filter((_, index) => index !== idx));
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
                        profile.map((el, index) =>
                          index === idx
                            ? {
                                ...el,
                                name,
                                photo,
                                job,
                                year,
                              }
                            : el
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
      )}

      {/* <Avatar
        image={'https://image.ajunews.com/content/image/2018/08/01/20180801082910765778.jpg'} year={1}
      /> */}
    </div>
  );
}
