import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Editor extends React.Component {
  render() {
    return (
      <div id="canvas" onInput={this.props.onInput} contentEditable></div>
    );
  }
}

class KeyLog extends React.Component {
  render() {
    return (
      <div id="key-log">{this.props.text}</div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };

  }

  handleInput(e) {
    console.log(e.target.children);
    this.setState({
      text: e.target.innerHTML
    });
  }

  render() {
    return (
      <div>
        <Editor onInput={(e) => this.handleInput(e)} />
        <KeyLog text={this.state.text}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
