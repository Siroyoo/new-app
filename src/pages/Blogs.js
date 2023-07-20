import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";
import BlogItem from "../components/BlogItem";

export default function Blogs() {
  const [blog, setBlog] = useState([]);

  const getBlogs = () => {
    axios
      .get("http://localhost:8082/blogs")
      .then((response) => {
        // = res
        setBlog(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        // = err
        // console.log(error);
      });
  };

  const handleRemove = (id) => {
    if (window.confirm("정말 삭제 하시겟습니까?")) {
      alert("삭제 되었습니다.");

      axios
        .delete(`http://localhost:8082/blogs/${id}`)
        .then((response) => {
          console.log(response);
          getBlogs();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("취소 되었습니다.");
    }
  };

  const updateBlog = (id, title, content) => {
    axios
      .put(`http://localhost:8082/blogs/${id}`, {
        title,
        content,
      })
      .then((response) => {
        console.log("수정되었습니다.");
        getBlogs();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);
  console.log(blog);
  return (
    <div className="container">
      <Link to="/blogs/create">
        <button>글 추가하기</button>
      </Link>
      {blog.map((blog) => {
        return (
          <BlogItem
            key={blog.id}
            blog={blog}
            updateBlog={updateBlog}
            handleRemove={() => handleRemove(blog.id)}
          />
        );
      })}
    </div>
  );
}
