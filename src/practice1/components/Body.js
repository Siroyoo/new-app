import React from "react";
import students from "../statics/db.json";

export default function Body() {
  return (
    <div>
      <body>
        {students.map((student) => (
          <div className="container" key={student.id}>
            <div>id: {student.id}</div>
            <div>name: {student.name}</div>
            <div>age: {student.age}</div>
          </div>
        ))}
      </body>
    </div>
  );
}
