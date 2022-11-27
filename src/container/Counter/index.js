import React from 'react'

export class Counter extends React.Component {
  state = {
    number: 0
  }
  render() {
    return (
      <div>
        <h3>{this.state.number}</h3>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          +
        </button>
      </div>
    )
  }
}
