import React from "react";

class CowListEntry extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showDescription: false,
        currentCow: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      event.preventDefault();
      var temp = this.state.showDescription;
      this.setState({
        showDescription: !temp, 
        currentCow: !temp
      })
    }
  
    render () {
      return (
          <tr className="cow-entry" onClick={(e) => this.handleClick(e)}>
            <td className="cow-name">{this.props.cow.cow_name}</td>
            {this.state.showDescription ? <td className="cow-description">{this.props.cow.cow_description}</td> : null}
          </tr>
      )
    }
  };
  
  export default CowListEntry;