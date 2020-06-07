import React from "react";
import ReactDOM from "react-dom";
import CowList from "./CowList";
import NewCowForm from "./NewCowForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {

  }
  
  handleSubmit(event) {
    
  }

  render() {
    return (
      <div className='container'>
        <div className='form'>
          <NewCowForm onSubmit={this.handleSubmit}/>
        </div>
        <div className='list'>
          <CowList cowList={this.state.cows}/>
        </div>
      </div>
    );
  }
};

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);