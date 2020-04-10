import React from "react";
import "./App.css";
import axios from "axios";
import Users from "./components/Users";

import ContactForm from "./components/ContactForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // data: {},
      // name: "",
      // country: "",
      person: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((response) => {
        console.log("DATA", response.data);

        this.setState({ person: response.data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    // console.log(this.state.data);

    return (
      <div className="App">
        <p>Women's World Cup</p>
        <ContactForm />
        {/* <SearchForm /> */}
        <Users person={this.state.person} />;
      </div>
    );
  }
}

export default App;
