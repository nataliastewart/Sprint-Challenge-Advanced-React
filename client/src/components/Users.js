import React from "react";

export default function Users(props) {
  console.log("PROPS on USER", props);
  return (
    <div>
      {props.person.map((item) => (
        // console.log("item", item)
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.country}</p>
        </div>
      ))}
    </div>
  );
}
