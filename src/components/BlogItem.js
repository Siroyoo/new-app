import React, { useState } from "react";

export default function BlogItem({ blog, handleRemove, updateBlog }) {
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [isEdit, setisEdit] = useState(false);

  const handlechange = () => {
    setisEdit(!isEdit);
    setTitle(blog.title);
    setContent(blog.content);
  };
  console.log(title);
  console.log(content);
  return (
    <div>
      {isEdit ? (
        <form className="blogs">
          <h2>수정 하기</h2>
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />{" "}
          <br />
          <textarea
            placeholder="내용"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />{" "}
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (window.confirm("수정하시겠습니까?")) {
                updateBlog(blog.id, title, content);
                setisEdit(false);
              }
            }}
          >
            저장하기
          </button>
          <button
            type="button"
            onClick={() => {
              setTitle(blog.title);
              setContent(blog.content);
              setisEdit(false);
            }}
          >
            취소하기
          </button>
        </form>
      ) : (
        <div className="blogs">
          <h2>제목: {blog.title}</h2>
          <p>내용: {blog.content}</p>
          <button onClick={handlechange}>수정</button>
          <button onClick={handleRemove}>삭제</button>
        </div>
      )}
    </div>
  );
}
