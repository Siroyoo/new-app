import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
export default function BlogCreate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const addBlog = () => {
    // {
    //   (title, content)
    //     ? axios
    //         .post("http://localhost:8082/blogs", {
    //           // 주소 / 내용
    //           title, // 업데이트 할곳
    //           content,
    //         })
    //         .then((response) => {
    //           console.log(response);
    //           setTitle("");
    //           setContent("");
    //           navigate("/blogs");
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         })
    //     : alert("제목을 입력해주세요.");
    // }

    if (title === "") {
      alert("제목을 입력해 주세요.");
      return;
    }
    if (content === "") {
      alert("내용을 입력해 주세요.");
      return;
    }
    if (window.confirm("글을 생성 하시겟습니까?") === false) {
      return;
    }

    axios
      .post("http://localhost:8082/blogs", {
        // 주소 / 내용
        title, // 업데이트 할곳
        content,
      })
      .then((response) => {
        console.log(response);
        setTitle("");
        setContent("");
        navigate("/blogs");
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="blogs">
        <h2>글 추가 하기</h2>
        <form>
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
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addBlog();
            }}
          >
            글 추가하기
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/blogs");
            }}
          >
            취소하기
          </button>
        </form>
      </div>
    </div>
  );
}
