import React from "react";
import SubmitButton from "./SubmitButton";

class NewCowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let cowObj = {}
    cowObj[event.target.name] = event.target.value;
    this.setState(cowObj);
  }

 
  render() {
    return (
      <div className='input'>
        <form>
          <label htmlFor='name'>Cow Name</label>
          <input type='text' id='name' name='name' value={this.state.name} onChange={(e) => this.handleChange(e)}/><br/>
          <label htmlFor='description'>Cow Description</label>
          <input type='text' id='description' name='description' value={this.state.description} onChange={(e) => this.handleChange(e)}/>
          <SubmitButton onSubmit={this.props.onSubmit}/>
        </form>
      </div>
    )
  }

}

export default NewCowForm;