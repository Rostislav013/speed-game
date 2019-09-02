import React , {Component} from 'react';
import '../Game.css';


class Buttons extends Component {
  render() {
    return (
      <div className="btns">
        <button type="button">Start game</button>
        <button type="button" /*onClick={window.location.reload()}*/>Stop game</button>
    </div>

    );


  }
}
export default Buttons;
