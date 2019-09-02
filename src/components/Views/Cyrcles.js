import React, {
  Component
} from 'react';
import '../Cyrcles.css';


class Cyrcles extends Component {
  render() {
    return (
      <div className = {"Circle" + (this.props.active ? " active" : "")} onClick={this.props.click} >

      </div>
    );
  }
}



export default Cyrcles;
