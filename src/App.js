import React from "react";

export default class App extends React.Component {
  state = {
    peopleInSpace: [],
  };

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
      .then((res) => res.json())
      .then(({ people }) => this.setState({ peopleInSpace: people }));
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((astronaut, id) => (
          <h1 key={id}>{astronaut.name}</h1>
        ))}
      </div>
    );
  }
}
