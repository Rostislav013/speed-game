import React , {Component} from 'react';
import './Gameover.css';


class Gameover extends Component {
  closeRestart = () => {
    window.location.reload();
  };



  render() {
    return (
      <div>

        <div className="notification" id="showEnd">
          <button onClick={this.closeRestart}>Close</button>
          <div className="noti">
          <p id="endGame">Oops, looks like it was too fast.</p>
          <p id="result">Your score is { this.props.wasup}.</p>
          </div>
        </div>
        <div className="cover" id="cover">  </div>

      </div>

    );
  }
}
export default Gameover;
