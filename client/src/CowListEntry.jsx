

class CowListEntry extends React.Component {
    constructor({cow}) {
      super({cow});
      this.state = {
        showDescription: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      event.preventDefault();
      var temp = this.state.showDescription;
      this.setState({
        showDescription: !temp
      })
    }
  
    render () {
      return (
        <tr className="cow-entry" onClick={(e) => this.handleClick(e)}>
          <td className="cow-name">{this.props.cow}</td>
          {this.state.showDescription ? <td className="cow-description">{this.props.cow.description}</td> : null};
        </tr>
      )
    }
  };
  
  export default CowListEntry;