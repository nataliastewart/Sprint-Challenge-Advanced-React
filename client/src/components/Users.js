import React from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function Users(props) {
  console.log("PROPS on USER", props);

  const [darkMode, setDarkMode] = useDarkMode("isDark");
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div onClick={toggleMode}>DarkMode</div>
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
