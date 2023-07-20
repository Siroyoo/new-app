import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function Home() {
  const students = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "lee", age: 21 },
    { id: 3, name: "jae", age: 23 },
    { id: 4, name: "yong", age: 25 },
    { id: 5, name: "Jay", age: 27 },
  ];
  return (
    <div>
      <div className="App">
        <Header />
        <Body students={students} />
        <Footer />
      </div>
    </div>
  );
}
