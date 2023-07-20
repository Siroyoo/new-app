import { useState } from "react";
import React from "react";

export default function ProfileFrom() {
  const [form, setForm] = useState([]);
  const [text, setText] = useState([]);

  console.log(form);
  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(form);
          }}
        >
          <label>
            <p>이름:</p>
            <input
              placeholder="이름을 입력하세요"
              name="name"
              value={form.name}
              onChange={(e) => {
                setForm({
                  name: e.target.value,
                  photo: form.photo,
                  job: form.job,
                  year: form.year,
                });
              }}
            />
          </label>
          <label>
            <p>사진:</p>
            <input
              placeholder="사진을 넣어주세요"
              name="photo"
              value={form.photo}
              onChange={(e) => {
                setForm({
                  name: form.name,
                  photo: e.target.value,
                  job: form.job,
                  year: form.year,
                });
              }}
            />
          </label>
          <label>
            <p>직업:</p>
            <input
              placeholder="직업을 입력하세요"
              name="job"
              value={form.job}
              onChange={(e) => {
                setForm({
                  name: form.name,
                  photo: form.photo,
                  job: e.target.value,
                  year: form.year,
                });
              }}
            />
          </label>
          <label>
            <p>경력:</p>
            <input
              placeholder="경력을 입력하세요"
              name="year"
              value={form.year}
              onChange={(e) => {
                setForm({
                  name: form.name,
                  photo: form.photo,
                  job: form.job,
                  year: e.target.value,
                });
              }}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {/* <div>
          <h2>입력한 정보를 확인하세요.</h2>
          {form.name ? (
            <p>이름: {form.name}</p>
          ) : (
            <alert>이름을 입력하지 않았습니다.</alert>
          )}
          {form.photo ? (
            <p>URL: {form.photo}</p>
          ) : (
            <alert>사진이 업로드되지 않았습니다.</alert>
          )}
          {form.job ? (
            <p>직업: {form.job}</p>
          ) : (
            <alert>직업을 입력하지 않았습니다.</alert>
          )}
          {form.year ? (
            <p>경력: {form.year}</p>
          ) : (
            <alert>경력을 입력하지 않았습니다.</alert>
          )}
        </div> */}
      </div>
    </div>
  );
}
