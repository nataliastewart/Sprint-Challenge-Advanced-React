import React from "react";

export default function SearchForm(props) {
  return (
    <form>
      <input name="search" placeholder="Search" />
      <button type="submit">Submit</button>
    </form>
  );
}
