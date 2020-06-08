import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CowList from "./CowList";
import NewCowForm from "./NewCowForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: []
    }
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.getAll = this.getAll.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  
  getAll() {
    axios.get('/api/cows')
      .then(({data}) => {
        console.log(data);
        this.updateData(data);
      })
      .catch(err => {
        console.log(err);
      });
  } 

  updateData(data) {
    this.setState({
      cows: data
    })
  }

  post(cow) {
    axios.post('/api/cows', {
      cow_name: cow.name, 
      cow_description: cow.description
    })
      .then((data) => {
        var temp = this.state.cows;
        temp.unshift(cow);
        this.updateData(temp);
      })
      .catch (err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getAll();
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.post();
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