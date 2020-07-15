import axios from "axios";

import React, { Component } from "react";

class App extends Component {
  state = {
    users: [],
    search: "",
  };

  async componentDidMount() {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ users });
  }

  searchChanged = (event) => {
    this.setState({ ...this.state, search: event.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <input
          type="text"
          onChange={this.searchChanged}
          value={this.state.search}
        />
        <div>
          {this.state.users
            .filter((user) => user.name.includes(this.state.search))
            .map((user) => (
              <ul key={user.id} class="list-group card card-1">
                <li class="list-group-item">{user.name}</li>
              </ul>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
