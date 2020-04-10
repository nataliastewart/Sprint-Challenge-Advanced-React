import React from "react";
import "./App.css";
import axios from "axios";
import Users from "./components/Users";

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
        <header className="App-header">
          <p>Women's World Cup</p>
        </header>
        {/* {this.state.data.map((item) => { */}
        <Users person={this.state.person} />;{/* // })} */}
      </div>
    );
  }
}

export default App;
